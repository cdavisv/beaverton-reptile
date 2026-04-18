import { appendFile, mkdir } from "node:fs/promises";

import { persistInquiry } from "@/lib/submissions";

jest.mock("node:fs/promises", () => ({
  appendFile: jest.fn(),
  mkdir: jest.fn(),
}));

describe("persistInquiry", () => {
  it("writes inquiry data to disk", async () => {
    const record = await persistInquiry(
      {
        email: "jamie@example.com",
        message: "Need setup help.",
        name: "Jamie",
        source: "contact",
      },
      {
        ipAddress: "127.0.0.1",
        userAgent: "jest",
      },
    );

    expect(mkdir).toHaveBeenCalled();
    expect(appendFile).toHaveBeenCalledWith(
      expect.stringContaining("inquiries.jsonl"),
      expect.stringContaining('"source":"contact"'),
      "utf8",
    );
    expect(record.ipAddress).toBe("127.0.0.1");
    expect(record.id).toEqual(expect.any(String));
  });
});
