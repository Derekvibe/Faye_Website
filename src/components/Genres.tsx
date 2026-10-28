"use client";

import React from "react";

export default function Genres() {
  const genres = [
    "Fiction",
    "Nonfiction",
    "Children’s books",
    "Christian and religious books",
    "Academic works",
    "Memoir and biography",
    "And more",
  ];

  return (
    <section
      id="genres"
      style={{
        backgroundColor: "var(--paper)",
        borderBlock: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "2.8rem" }}>
          <p className="eyebrow">Genres</p>
          <h2 style={{ marginBottom: "0.8rem" }}>Every genre. Every story.</h2>
          <p className="lead">Whatever you write, I bring the same care to it.</p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.85rem",
          }}
          className="genre-chips"
        >
          {genres.map((g, i) => (
            <span
              key={i}
              className="chip-item"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.35rem",
                padding: "0.55rem 1.4rem",
                borderRadius: "999px",
                border: "1.5px solid var(--bronze)",
                color: "var(--char)",
                backgroundColor: "var(--ivory)",
                transition: "background-color 0.25s ease, color 0.25s ease",
                cursor: "default",
              }}
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .chip-item:hover {
          background-color: var(--bronze) !important;
          color: var(--paper) !important;
        }
      `}</style>
    </section>
  );
}
