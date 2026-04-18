import { render, screen } from "@testing-library/react";

import { CTASection } from "@/components/sections/CTASection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { StoreVisitCard } from "@/components/sections/StoreVisitCard";

describe("marketing sections", () => {
  it("renders shared section components", () => {
    render(
      <div>
        <PageHero
          hero={{
            eyebrow: "Eyebrow",
            title: "Hero title",
            description: "Hero description",
            primaryCta: { href: "/contact", label: "Primary" },
            secondaryCta: { href: "tel:+123456789", label: "Call" },
            trustNote: "Trust note",
          }}
        />
        <SectionIntro
          title="Section title"
          description="Section description"
          eyebrow="Intro"
        />
        <ProofStrip items={["Proof one", "Proof two"]} />
        <CategoryGrid
          items={[
            {
              title: "Category",
              description: "Category description",
              href: "/product",
            },
          ]}
        />
        <FeatureGrid
          items={[{ title: "Feature", description: "Feature description" }]}
        />
        <PricingGrid
          items={[
            {
              title: "Pricing title",
              price: "$20",
              details: ["One", "Two"],
              note: "Pricing note",
            },
          ]}
        />
        <CTASection title="CTA title" description="CTA description" />
        <StoreVisitCard />
      </div>,
    );

    expect(screen.getByText("Hero title")).toBeVisible();
    expect(screen.getByRole("link", { name: "Call" })).toHaveAttribute(
      "href",
      "tel:+123456789",
    );
    expect(screen.getByText("Proof one")).toBeVisible();
    expect(screen.getByText("Category description")).toBeVisible();
    expect(screen.getByText("Feature description")).toBeVisible();
    expect(screen.getByText("Pricing note")).toBeVisible();
    expect(screen.getByText("CTA title")).toBeVisible();
    expect(screen.getByText("Plan a smooth store visit.")).toBeVisible();
  });
});
