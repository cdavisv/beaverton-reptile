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
        message: "Need help choosing the right first enclosure setup.",
        name: "Avery",
        source: "contact",
      }),
    ).toThrow("A valid email address is required.");
  });

  it("rejects unsupported select values", () => {
    expect(() =>
      parseInquiryPayload({
        email: "person@example.com",
        interestCategory: "Animals",
        message: "Need help finding a first habitat.",
        name: "Avery",
        source: "contact",
      }),
    ).toThrow('Field "interestCategory" contains an unsupported value.');
  });

  it("rejects messages that are too short", () => {
    expect(() =>
      parseInquiryPayload({
        email: "person@example.com",
        message: "Too short",
        name: "Avery",
        source: "contact",
      }),
    ).toThrow('Field "message" must be between 10 and 1200 characters.');
  });
});
