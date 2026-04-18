import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/content/site";
import { createLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = createLocalBusinessSchema();

  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
