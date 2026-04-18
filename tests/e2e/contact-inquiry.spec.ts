import { expect, test } from "@playwright/test";
import { readFile, rm } from "node:fs/promises";
import path from "node:path";

const submissionFile = path.join(
  process.cwd(),
  "data",
  "submissions",
  "inquiries.jsonl",
);

async function readLatestSubmission() {
  const content = await readFile(submissionFile, "utf8");
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    throw new Error("No inquiry submissions were persisted.");
  }

  return JSON.parse(lines.at(-1) ?? "{}") as {
    email: string;
    interestCategory?: string;
    message: string;
    name: string;
    source: string;
  };
}

test.describe("contact inquiry flow", () => {
  test.beforeEach(async () => {
    await rm(submissionFile, { force: true });
  });

  test("submits the contact form and persists the inquiry", async ({
    page,
  }) => {
    await page.goto("/contact");

    await page.getByLabel("Name").fill("Jamie Rivers");
    await page.getByLabel("Email").fill("jamie@example.com");
    await page.getByLabel("Interest category").selectOption("Feeders");
    await page
      .getByLabel("Message")
      .fill("Checking feeder availability before driving in this weekend.");

    await page.getByRole("button", { name: "Send My Request" }).click();

    await expect(
      page.getByText(
        "Thanks. We received your message and will follow up soon.",
      ),
    ).toBeVisible();

    await expect
      .poll(readLatestSubmission, { message: "Expected saved inquiry record." })
      .toMatchObject({
        email: "jamie@example.com",
        interestCategory: "Feeders",
        message: "Checking feeder availability before driving in this weekend.",
        name: "Jamie Rivers",
        source: "contact",
      });
  });
});
