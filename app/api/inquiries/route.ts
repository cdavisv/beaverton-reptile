import { NextResponse } from "next/server";

import { parseInquiryPayload } from "@/lib/forms";
import { RateLimitError, assertInquiryRateLimit } from "@/lib/rate-limit";
import { persistInquiry } from "@/lib/submissions";

export async function POST(request: Request) {
  try {
    ensureJsonRequest(request);
    assertInquiryRateLimit(getRateLimitKey(request));

    const payload = parseInquiryPayload(await request.json());
    const record = await persistInquiry(payload, {
      ipAddress: getClientIpAddress(request),
      userAgent: request.headers.get("user-agent") ?? undefined,
    });

    return NextResponse.json({
      data: { id: record.id },
      message:
        payload.source === "contact"
          ? "Thanks. We received your message and will follow up soon."
          : "Thanks. We received your request and will help you narrow the right next step.",
    });
  } catch (error) {
    if (error instanceof RateLimitError) {
      return NextResponse.json(
        {
          error: {
            code: "RATE_LIMITED",
            message: error.message,
          },
          message: error.message,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(error.retryAfterSeconds),
          },
        },
      );
    }

    const isValidationError = error instanceof Error;
    const message = isValidationError
      ? error.message
      : "Unable to process your request right now.";

    return NextResponse.json(
      {
        error: {
          code: isValidationError
            ? "INVALID_REQUEST"
            : "INQUIRY_SUBMISSION_FAILED",
          message,
        },
        message,
      },
      { status: isValidationError ? 400 : 500 },
    );
  }
}

function ensureJsonRequest(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    throw new Error("Content-Type must be application/json.");
  }
}

function getRateLimitKey(request: Request) {
  return getClientIpAddress(request);
}

function getClientIpAddress(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstAddress = forwardedFor
      .split(",")
      .map((value) => value.trim())
      .find(Boolean);

    if (firstAddress) {
      return firstAddress;
    }
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "local-development";
}
