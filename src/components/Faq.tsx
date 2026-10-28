"use client";

import React from "react";

export default function Faq() {
  const faqs = [
    {
      q: "What is the difference between editing and proofreading?",
      a: "Editing improves the writing itself: structure and pacing (developmental), flow and tone (line), and clarity and consistency (copy). Proofreading is the final polish that catches typos, grammar and punctuation slips once everything else is done.",
    },
    {
      q: "Which book sizes do you format?",
      a: "Any size. Tell me your trim size when you message me and I will format to it, for paperback and eBook.",
    },
    {
      q: "Can you format for platforms other than Amazon KDP?",
      a: "Yes. My formatting is prepared for Amazon KDP and for other publishing platforms. Mention where you plan to publish and I will prepare your files accordingly.",
    },
    {
      q: "Will I see every change you make?",
      a: "Yes. Edits are delivered with tracked changes and comments, so you can accept, reject or discuss each one.",
    },
    {
      q: "Do you design book covers?",
      a: "Yes. I design front covers, and full wraps with spine and back cover, for every genre. Browse the portfolio above for examples.",
    },
    {
      q: "Which genres do you work with?",
      a: "Fiction, nonfiction, children’s books, Christian and religious books, academic works and more.",
    },
    {
      q: "How do I get started?",
      a: "Message me on Fiverr with your manuscript and goals. I respond quickly and will recommend the right service and package for your book.",
    },
  ];

  return (
    <section id="faq">
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <p className="eyebrow">FAQ</p>
          <h2>Questions, answered.</h2>
        </div>

        <div
          style={{
            maxWidth: "860px",
          }}
          className="faq-list"
        >
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid var(--line)",
                padding: "1.3rem 0",
              }}
            >
              <summary
                style={{
                  listStyle: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "var(--serif)",
                  fontSize: "1.35rem",
                  color: "var(--char)",
                }}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle" />
              </summary>
              <p
                style={{
                  marginTop: "0.9rem",
                  color: "var(--muted)",
                  maxWidth: "68ch",
                  fontSize: "1.02rem",
                  lineHeight: 1.65,
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        summary::-webkit-details-marker {
          display: none;
        }
        .faq-toggle::after {
          content: "+";
          font-family: var(--sans);
          font-size: 1.8rem;
          color: var(--bronze);
          transition: transform 0.3s ease;
          display: inline-block;
        }
        details[open] .faq-toggle::after {
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
}
