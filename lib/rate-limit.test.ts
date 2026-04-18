import {
  RateLimitError,
  assertInquiryRateLimit,
  resetInquiryRateLimitStore,
} from "@/lib/rate-limit";

describe("assertInquiryRateLimit", () => {
  beforeEach(() => {
    resetInquiryRateLimitStore();
  });

  it("allows requests within the configured window", () => {
    for (let index = 0; index < 5; index += 1) {
      expect(() => assertInquiryRateLimit("ip-address", 1000)).not.toThrow();
    }
  });

  it("throws after the limit is exceeded", () => {
    for (let index = 0; index < 5; index += 1) {
      assertInquiryRateLimit("ip-address", 1000);
    }

    expect(() => assertInquiryRateLimit("ip-address", 1000)).toThrow(
      RateLimitError,
    );
  });

  it("resets the window after expiration", () => {
    for (let index = 0; index < 5; index += 1) {
      assertInquiryRateLimit("ip-address", 1000);
    }

    expect(() => assertInquiryRateLimit("ip-address", 1000)).toThrow(
      RateLimitError,
    );
    expect(() =>
      assertInquiryRateLimit("ip-address", 1000 + 10 * 60 * 1000),
    ).not.toThrow();
  });
});
