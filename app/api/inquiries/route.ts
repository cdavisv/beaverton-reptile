import { NextResponse } from "next/server";

import { parseInquiryPayload } from "@/lib/forms";
import { persistInquiry } from "@/lib/submissions";

export async function POST(request: Request) {
  try {
    const payload = parseInquiryPayload(await request.json());
    await persistInquiry(payload);

    return NextResponse.json({
      message:
        payload.source === "contact"
          ? "Thanks. We received your message and will follow up soon."
          : "Thanks. We received your request and will help you narrow the right next step.",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to process your request right now.";

    return NextResponse.json({ message }, { status: 400 });
  }
}
