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

const allowedSources = new Set<InquiryPayload["source"]>([
  "contact",
  "get-started",
]);
const allowedInterestCategories = new Set([
  "Reptiles",
  "Feeders",
  "Habitats",
  "Supplies",
]);
const allowedExperienceLevels = new Set([
  "Brand new",
  "Some experience",
  "Experienced keeper",
]);
const allowedBudgets = new Set([
  "Under $150",
  "$150 to $400",
  "$400 to $900",
  "$900+",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-.\s]{7,20}$/;

export function parseInquiryPayload(input: unknown): InquiryPayload {
  if (typeof input !== "object" || input === null) {
    throw new Error("Invalid request payload.");
  }

  const source = readString(input, "source", { minLength: 2, maxLength: 32 });
  const name = readString(input, "name", { minLength: 2, maxLength: 80 });
  const email = readString(input, "email", { minLength: 5, maxLength: 254 });
  const message = readString(input, "message", {
    minLength: 10,
    maxLength: 1200,
  });

  if (!allowedSources.has(source as InquiryPayload["source"])) {
    throw new Error("Unknown inquiry source.");
  }

  if (!emailPattern.test(email)) {
    throw new Error("A valid email address is required.");
  }

  const phone = readOptionalString(input, "phone", {
    maxLength: 20,
  });
  if (phone && !phonePattern.test(phone)) {
    throw new Error("Phone number format is invalid.");
  }

  const interestCategory = readOptionalEnum(
    input,
    "interestCategory",
    allowedInterestCategories,
  );
  const experienceLevel = readOptionalEnum(
    input,
    "experienceLevel",
    allowedExperienceLevels,
  );
  const budget = readOptionalEnum(input, "budget", allowedBudgets);

  return {
    budget,
    email,
    experienceLevel,
    interestCategory,
    message,
    name,
    phone,
    source: source as InquiryPayload["source"],
  };
}

function readString(
  input: object,
  key: string,
  options: { minLength: number; maxLength: number },
): string {
  const value = Reflect.get(input, key);

  if (typeof value !== "string") {
    throw new Error(`Field "${key}" is required.`);
  }

  const trimmed = value.trim();
  if (
    trimmed.length < options.minLength ||
    trimmed.length > options.maxLength
  ) {
    throw new Error(
      `Field "${key}" must be between ${options.minLength} and ${options.maxLength} characters.`,
    );
  }

  return trimmed;
}

function readOptionalString(
  input: object,
  key: string,
  options?: { maxLength: number },
): string | undefined {
  const value = Reflect.get(input, key);

  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return undefined;
  }

  if (options && trimmed.length > options.maxLength) {
    throw new Error(
      `Field "${key}" must be ${options.maxLength} characters or fewer.`,
    );
  }

  return trimmed;
}

function readOptionalEnum(
  input: object,
  key: string,
  allowedValues: Set<string>,
): string | undefined {
  const value = readOptionalString(input, key, { maxLength: 64 });

  if (!value) {
    return undefined;
  }

  if (!allowedValues.has(value)) {
    throw new Error(`Field "${key}" contains an unsupported value.`);
  }

  return value;
}
