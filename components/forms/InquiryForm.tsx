"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormMode = "contact" | "get-started";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

const defaultState: FormState = { status: "idle" };

export function InquiryForm({ mode }: { mode: FormMode }) {
  const [state, setState] = useState<FormState>(defaultState);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      budget: String(formData.get("budget") ?? ""),
      email: String(formData.get("email") ?? ""),
      experienceLevel: String(formData.get("experienceLevel") ?? ""),
      interestCategory: String(formData.get("interestCategory") ?? ""),
      message: String(formData.get("message") ?? ""),
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      source: mode,
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(result.message);
      }

      setState({ status: "success", message: result.message });
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send your request.";
      setState({ status: "error", message });
    }
  }

  return (
    <form
      className="surface inquiry-form"
      onSubmit={onSubmit}
      aria-describedby={state.message ? "form-status" : undefined}
    >
      <div className="form-grid">
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Phone <span className="field-note">Optional</span>
          <input name="phone" type="tel" />
        </label>
        <label>
          Interest category
          <select name="interestCategory" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option>Reptiles</option>
            <option>Feeders</option>
            <option>Habitats</option>
            <option>Supplies</option>
          </select>
        </label>
        {mode === "get-started" ? (
          <>
            <label>
              Experience level
              <select name="experienceLevel" defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option>Brand new</option>
                <option>Some experience</option>
                <option>Experienced keeper</option>
              </select>
            </label>
            <label>
              Budget range
              <select name="budget" defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option>Under $150</option>
                <option>$150 to $400</option>
                <option>$400 to $900</option>
                <option>$900+</option>
              </select>
            </label>
          </>
        ) : null}
      </div>
      <label>
        Message
        <textarea
          name="message"
          required
          placeholder={
            mode === "get-started"
              ? "Tell us what animal, habitat, or guidance you need."
              : "Tell us what you want to check before visiting."
          }
        />
      </label>
      <button
        className="button"
        type="submit"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Sending..." : "Send My Request"}
      </button>
      {state.message ? (
        <p
          id="form-status"
          className={
            state.status === "error" ? "form-status error" : "form-status"
          }
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
