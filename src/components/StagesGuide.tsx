"use client";

import React from "react";

export default function StagesGuide() {
  const stages = [
    {
      num: "1",
      title: "Developmental",
      description: "The big picture: structure, pacing, plot, character and argument.",
      timing: "Start here for a first draft",
    },
    {
      num: "2",
      title: "Line editing",
      description: "The sound of the writing: flow, tone, rhythm and word choice.",
      timing: "Once the structure is settled",
    },
    {
      num: "3",
      title: "Copy editing",
      description: "The details: clarity, consistency, grammar and style.",
      timing: "Before formatting",
    },
    {
      num: "4",
      title: "Proofreading",
      description: "The last look: typos, punctuation and small slips in the final layout.",
      timing: "Right before publishing",
    },
  ];

  return (
    <section
      id="stages"
      style={{
        backgroundColor: "var(--paper)",
        borderBlock: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3.5rem" }}>
          <p className="eyebrow">Not sure what you need?</p>
          <h2 style={{ marginBottom: "1rem" }}>
            The four stages of editing, in order.
          </h2>
          <p className="lead">
            Most books move through these stages. Tell me where your manuscript is and I will recommend the right starting point.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.8rem",
            position: "relative",
          }}
          className="steps-grid"
        >
          {stages.map((stg) => (
            <div
              key={stg.num}
              style={{
                position: "relative",
                paddingTop: "4.2rem",
              }}
              className="step-item"
            >
              {/* Number Circle */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "var(--ivory)",
                  border: "2px solid var(--bronze)",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--serif)",
                  fontSize: "1.5rem",
                  color: "var(--bronze-dark)",
                  zIndex: 2,
                }}
              >
                {stg.num}
              </div>

              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", color: "var(--char)" }}>
                {stg.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "0.97rem", lineHeight: 1.6 }}>
                {stg.description}
              </p>

              <small
                style={{
                  display: "block",
                  marginTop: "0.75rem",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--bronze-dark)",
                  fontWeight: 600,
                }}
              >
                {stg.timing}
              </small>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .steps-grid::before {
          content: "";
          position: absolute;
          top: 27px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg, var(--bronze), rgba(154, 123, 79, 0.25));
          z-index: 1;
        }
        @media (max-width: 980px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem 1.5rem !important;
          }
          .steps-grid::before {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
