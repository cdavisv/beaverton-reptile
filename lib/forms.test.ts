import { parseInquiryPayload } from "@/lib/forms";

describe("parseInquiryPayload", () => {
  it("returns a normalized payload", () => {
    expect(
      parseInquiryPayload({
        email: "person@example.com",
        message: "Need help with a setup.",
        name: "Avery",
        source: "get-started",
      }),
    ).toEqual({
      budget: undefined,
      email: "person@example.com",
      experienceLevel: undefined,
      interestCategory: undefined,
      message: "Need help with a setup.",
      name: "Avery",
      phone: undefined,
      source: "get-started",
    });
  });

  it("rejects invalid email addresses", () => {
    expect(() =>
      parseInquiryPayload({
        email: "not-valid",
        message: "Need help",
        name: "Avery",
        source: "contact",
      }),
    ).toThrow("A valid email address is required.");
  });
});
