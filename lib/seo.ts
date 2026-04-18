import type { Metadata } from "next";

import { pageSeo, siteConfig } from "@/content/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beavertonreptiles.com";

export function createMetadata(page: keyof typeof pageSeo): Metadata {
  const seo = pageSeo[page];

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: seo.path },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.path,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetStore"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beaverton",
      addressRegion: "OR",
      postalCode: "97005",
      streetAddress: siteConfig.address,
    },
    areaServed: "Beaverton and Portland metro",
    description: siteConfig.summary,
    email: siteConfig.email,
    name: siteConfig.name,
    telephone: siteConfig.phone,
    url: siteUrl,
  };
}
