/** @jest-environment node */

import { POST } from "@/app/api/inquiries/route";

jest.mock("@/lib/submissions", () => ({
  persistInquiry: jest.fn().mockResolvedValue(undefined),
}));

describe("POST /api/inquiries", () => {
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
  });
});
