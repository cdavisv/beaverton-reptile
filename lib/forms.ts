export type InquiryPayload = {
  budget?: string;
  email: string;
  experienceLevel?: string;
  interestCategory?: string;
  message: string;
  name: string;
  phone?: string;
  source: "contact" | "get-started";
};

export function parseInquiryPayload(input: unknown): InquiryPayload {
  if (typeof input !== "object" || input === null) {
    throw new Error("Invalid request payload.");
  }

  const source = readString(input, "source");
  const name = readString(input, "name");
  const email = readString(input, "email");
  const message = readString(input, "message");

  if (source !== "contact" && source !== "get-started") {
    throw new Error("Unknown inquiry source.");
  }

  if (!email.includes("@")) {
    throw new Error("A valid email address is required.");
  }

  return {
    budget: readOptionalString(input, "budget"),
    email,
    experienceLevel: readOptionalString(input, "experienceLevel"),
    interestCategory: readOptionalString(input, "interestCategory"),
    message,
    name,
    phone: readOptionalString(input, "phone"),
    source,
  };
}

function readString(input: object, key: string): string {
  const value = Reflect.get(input, key);

  if (typeof value !== "string" || value.trim().length < 2) {
    throw new Error(`Field "${key}" is required.`);
  }

  return value.trim();
}

function readOptionalString(input: object, key: string): string | undefined {
  const value = Reflect.get(input, key);

  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}
