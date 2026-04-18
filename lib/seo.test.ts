import { createLocalBusinessSchema, createMetadata } from "@/lib/seo";

describe("seo helpers", () => {
  it("builds metadata for a page", () => {
    const metadata = createMetadata("contact");

    expect(metadata.title).toBe(
      "Contact Beaverton Reptiles | Hours, Location & Inquiries",
    );
    expect(metadata.alternates?.canonical).toBe("/contact");
  });

  it("builds local business schema", () => {
    const schema = createLocalBusinessSchema();

    expect(schema.name).toBe("Beaverton Reptiles");
    expect(schema["@type"]).toContain("PetStore");
  });
});
