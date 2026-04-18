"use client";

import { useState } from "react";

import type { FaqItem } from "@/content/site";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list surface">
      {items.map((item, index) => {
        const expanded = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={expanded}
              aria-controls={answerId}
              onClick={() => setOpenIndex(expanded ? null : index)}
            >
              <span>{item.question}</span>
              <span aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            <div id={answerId} hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
