"use client";

import { useState } from "react";
import { Plus, Phone } from "./icons";

type Item = { question: string; answer: string };

export default function Faq({ heading, subheading, items, phone }: { heading: string; subheading: string; items: Item[]; phone: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow">Questions</span>
          <h2>{heading}</h2>
          <span className="rule" />
          <p>{subheading}</p>
          <div className="faq-call">
            <small>Prefer to talk it through?</small>
            <a href={`tel:${phone}`}><Phone size={20} /> {phone}</a>
          </div>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div key={it.question} className={"faq-item" + (open === i ? " is-open" : "")}>
              <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                {it.question}
                <span className="faq-ico"><Plus size={18} /></span>
              </button>
              <div className="faq-a"><div><p>{it.answer}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
