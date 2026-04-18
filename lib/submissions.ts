import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

import type { InquiryPayload } from "@/lib/forms";

const submissionDir = path.join(process.cwd(), "data", "submissions");
const submissionFile = path.join(submissionDir, "inquiries.jsonl");

export async function persistInquiry(payload: InquiryPayload) {
  const record = JSON.stringify({
    ...payload,
    createdAt: new Date().toISOString(),
  });

  await mkdir(submissionDir, { recursive: true });
  await appendFile(submissionFile, `${record}\n`, "utf8");
}
