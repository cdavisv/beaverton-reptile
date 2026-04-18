import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InquiryForm } from "@/components/forms/InquiryForm";

describe("InquiryForm", () => {
  it("submits and renders success feedback", async () => {
    const user = userEvent.setup();
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: "Saved successfully." }),
    });
    global.fetch = fetchMock as typeof fetch;

    render(<InquiryForm mode="contact" />);

    await user.type(screen.getByLabelText(/^Name$/i), "Jamie");
    await user.type(screen.getByLabelText(/^Email$/i), "jamie@example.com");
    await user.selectOptions(
      screen.getByLabelText(/interest category/i),
      "Feeders",
    );
    await user.type(
      screen.getByLabelText(/^Message$/i),
      "Checking feeder availability.",
    );
    await user.click(screen.getByRole("button", { name: /send my request/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "/api/inquiries",
        expect.objectContaining({ method: "POST" }),
      );
    });

    expect(await screen.findByText("Saved successfully.")).toBeVisible();
  });
});
