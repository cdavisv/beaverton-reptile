/** @jest-environment node */

import { POST } from "@/app/api/inquiries/route";
import { resetInquiryRateLimitStore } from "@/lib/rate-limit";

jest.mock("@/lib/submissions", () => ({
  persistInquiry: jest.fn().mockResolvedValue({
    createdAt: "2026-04-18T00:00:00.000Z",
    email: "jamie@example.com",
    id: "inq_123",
    ipAddress: "127.0.0.1",
    message: "Looking for a starter setup.",
    name: "Jamie",
    source: "get-started",
  }),
}));

describe("POST /api/inquiries", () => {
  beforeEach(() => {
    resetInquiryRateLimitStore();
  });

  it("returns success for valid payloads", async () => {
    const request = new Request("http://localhost/api/inquiries", {
      method: "POST",
      body: JSON.stringify({
        email: "jamie@example.com",
        message: "Looking for a starter setup.",
        name: "Jamie",
        source: "get-started",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      data: { id: "inq_123" },
      message:
        "Thanks. We received your request and will help you narrow the right next step.",
    });
  });

  it("returns a validation error for invalid payloads", async () => {
    const request = new Request("http://localhost/api/inquiries", {
      method: "POST",
      body: JSON.stringify({ source: "contact" }),
      headers: { "Content-Type": "application/json" },
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: {
        code: "INVALID_REQUEST",
        message: 'Field "name" is required.',
      },
      message: 'Field "name" is required.',
    });
  });

  it("rejects non-json requests", async () => {
    const request = new Request("http://localhost/api/inquiries", {
      method: "POST",
      body: "name=Jamie",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: {
        code: "INVALID_REQUEST",
        message: "Content-Type must be application/json.",
      },
      message: "Content-Type must be application/json.",
    });
  });

  it("rate limits repeated requests from the same IP", async () => {
    const makeRequest = () =>
      POST(
        new Request("http://localhost/api/inquiries", {
          method: "POST",
          body: JSON.stringify({
            email: "jamie@example.com",
            message: "Looking for a starter setup.",
            name: "Jamie",
            source: "contact",
          }),
          headers: {
            "Content-Type": "application/json",
            "X-Forwarded-For": "203.0.113.10",
          },
        }),
      );

    for (let index = 0; index < 5; index += 1) {
      const response = await makeRequest();
      expect(response.status).toBe(200);
    }

    const limitedResponse = await makeRequest();

    expect(limitedResponse.status).toBe(429);
    expect(limitedResponse.headers.get("Retry-After")).toEqual(
      expect.any(String),
    );
    expect(await limitedResponse.json()).toEqual({
      error: {
        code: "RATE_LIMITED",
        message:
          "Too many inquiries from this network. Please try again shortly.",
      },
      message:
        "Too many inquiries from this network. Please try again shortly.",
    });
  });
});
