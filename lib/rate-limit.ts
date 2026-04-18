type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const windowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

export class RateLimitError extends Error {
  readonly retryAfterSeconds: number;

  constructor(retryAfterSeconds: number) {
    super("Too many inquiries from this network. Please try again shortly.");
    this.name = "RateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export function assertInquiryRateLimit(key: string, now = Date.now()) {
  pruneExpiredEntries(now);

  const existing = rateLimitStore.get(key);
  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    return;
  }

  if (existing.count >= maxRequestsPerWindow) {
    throw new RateLimitError(
      Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    );
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);
}

export function resetInquiryRateLimitStore() {
  rateLimitStore.clear();
}

function pruneExpiredEntries(now: number) {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}
