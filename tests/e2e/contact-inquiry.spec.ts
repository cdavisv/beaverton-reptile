import { expect, test, type Page } from "@playwright/test";
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

async function expectSavedSubmission(expected: {
  email: string;
  interestCategory?: string;
  message: string;
  name: string;
  source: string;
  experienceLevel?: string;
  budget?: string;
}) {
  await expect
    .poll(readLatestSubmission, { message: "Expected saved inquiry record." })
    .toMatchObject(expected);
}

async function expectNoAsideLandmarks(page: Page) {
  await expect(page.locator("aside")).toHaveCount(0);
}

async function expectSubmissionMessage(page: Page, message: string) {
  await expect(page.getByRole("status")).toHaveText(message);
}

test.describe("lead inquiry flow", () => {
  test.beforeEach(async () => {
    await rm(submissionFile, { force: true });
  });

  test("submits the contact form and persists the inquiry", async ({
    page,
  }) => {
    await page.goto("/contact");
    await expectNoAsideLandmarks(page);

    await page.getByLabel("Name").fill("Jamie Rivers");
    await page.getByLabel("Email").fill("jamie@example.com");
    await page.getByLabel("Interest category").selectOption("Feeders");
    await page
      .getByLabel("Message")
      .fill("Checking feeder availability before driving in this weekend.");

    await page.getByRole("button", { name: "Send My Request" }).click();

    await expectSubmissionMessage(
      page,
      "Thanks. We received your message and will follow up soon.",
    );

    await expectSavedSubmission({
      email: "jamie@example.com",
      interestCategory: "Feeders",
      message: "Checking feeder availability before driving in this weekend.",
      name: "Jamie Rivers",
      source: "contact",
    });
  });

  test("submits the guided get-started form and persists the inquiry", async ({
    page,
  }) => {
    await page.goto("/get-started");
    await expectNoAsideLandmarks(page);

    await page.getByLabel("Name").fill("Morgan Hale");
    await page.getByLabel("Email").fill("morgan@example.com");
    await page.getByLabel("Phone Optional").fill("503-555-0182");
    await page.getByLabel("Interest category").selectOption("Habitats");
    await page.getByLabel("Experience level").selectOption("Brand new");
    await page.getByLabel("Budget range").selectOption("$150 to $400");
    await page
      .getByLabel("Message")
      .fill(
        "Need a beginner-friendly terrarium bundle for a first leopard gecko.",
      );

    await page.getByRole("button", { name: "Send My Request" }).click();

    await expectSubmissionMessage(
      page,
      "Thanks. We received your request and will help you narrow the right next step.",
    );

    await expectSavedSubmission({
      budget: "$150 to $400",
      email: "morgan@example.com",
      experienceLevel: "Brand new",
      interestCategory: "Habitats",
      message:
        "Need a beginner-friendly terrarium bundle for a first leopard gecko.",
      name: "Morgan Hale",
      source: "get-started",
    });
  });
});
