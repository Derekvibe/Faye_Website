"use client";

import React from "react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Say hello",
      text: "Message me on Fiverr with your manuscript, your goals and your deadline.",
    },
    {
      num: "02",
      title: "Choose a service",
      text: "Pick the service or package that fits, and I will confirm the plan with you.",
    },
    {
      num: "03",
      title: "I get to work",
      text: "Your book is edited, formatted or designed, with tracked changes and clear communication.",
    },
    {
      num: "04",
      title: "Review and publish",
      text: "You review, request revisions, and receive publication-ready files.",
    },
  ];

  return (
    <section id="process">
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3.2rem" }}>
          <p className="eyebrow">How it works</p>
          <h2>Simple, clear and collaborative.</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.4rem",
          }}
          className="process-grid"
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "2.2rem 1.8rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--paper)",
                border: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  fontFamily: "var(--serif)",
                  fontSize: "3rem",
                  color: "rgba(154, 123, 79, 0.45)",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                {s.num}
              </em>

              <h3 style={{ margin: "0.8rem 0 0.5rem", fontSize: "1.3rem", color: "var(--char)" }}>
                {s.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "0.97rem", lineHeight: 1.6 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
