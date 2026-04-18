import type { MetadataRoute } from "next";

import { pageSeo } from "@/content/site";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beavertonreptiles.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageSeo).map((page) => ({
    url: `${baseUrl}${page.path}`,
  }));
}
