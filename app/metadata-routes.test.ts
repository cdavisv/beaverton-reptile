import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

describe("metadata routes", () => {
  it("returns a sitemap with all pages", () => {
    const pages = sitemap();

    expect(pages.length).toBeGreaterThan(5);
    expect(pages[0]?.url).toContain("beavertonreptiles.com");
  });

  it("returns robots configuration", () => {
    expect(robots()).toEqual({
      rules: {
        allow: "/",
        userAgent: "*",
      },
      sitemap: "https://www.beavertonreptiles.com/sitemap.xml",
    });
  });
});
