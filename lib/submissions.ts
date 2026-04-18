import { mkdir, appendFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";

import type { InquiryPayload } from "@/lib/forms";

const submissionDir = path.join(process.cwd(), "data", "submissions");
const submissionFile = path.join(submissionDir, "inquiries.jsonl");

export type PersistedInquiry = InquiryPayload & {
  createdAt: string;
  id: string;
  ipAddress: string;
  userAgent?: string;
};

export async function persistInquiry(
  payload: InquiryPayload,
  metadata: { ipAddress: string; userAgent?: string },
) {
  const record: PersistedInquiry = {
    ...payload,
    createdAt: new Date().toISOString(),
    id: randomUUID(),
    ipAddress: metadata.ipAddress,
    userAgent: metadata.userAgent,
  };

  await mkdir(submissionDir, { recursive: true });
  await appendFile(submissionFile, `${JSON.stringify(record)}\n`, "utf8");

  return record;
}
