import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

jest.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

describe("site layout components", () => {
  it("renders header navigation and opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    expect(screen.getAllByText("Contact")[0]).toHaveAttribute(
      "aria-current",
      "page",
    );

    await user.click(
      screen.getByRole("button", { name: /open navigation menu/i }),
    );

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(
      screen.getByRole("link", { name: /call the store/i }),
    ).toHaveAttribute("href", "tel:+15035550147");
  });

  it("cycles the theme toggle state", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", {
      name: /current theme: system/i,
    });
    await user.click(toggle);

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });

  it("renders footer contact information", () => {
    render(<SiteFooter />);

    expect(screen.getByText("Beaverton Reptiles")).toBeVisible();
    expect(
      screen.getByRole("link", { name: /\(503\) 555-0147/i }),
    ).toHaveAttribute("href", "tel:+15035550147");
  });
});
