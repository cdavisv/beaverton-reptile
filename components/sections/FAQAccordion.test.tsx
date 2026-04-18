import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FAQAccordion } from "@/components/sections/FAQAccordion";

const items = [
  { question: "Question one?", answer: "Answer one." },
  { question: "Question two?", answer: "Answer two." },
];

describe("FAQAccordion", () => {
  it("toggles visible answers", async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={items} />);

    expect(screen.getByText("Answer one.")).toBeVisible();

    await user.click(screen.getByRole("button", { name: /question two/i }));

    expect(screen.getByText("Answer two.")).toBeVisible();
    expect(screen.queryByText("Answer one.")).not.toBeVisible();
  });
});
