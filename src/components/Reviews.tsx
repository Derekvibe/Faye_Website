"use client";

import React from "react";

export default function Reviews() {
  const reviews = [
    {
      quote:
        "“This is my third order processed by Favour. She is an absolute delight to work with. Will solicit her services for all of my publication needs.”",
      author: "sharon_hilliard",
      role: "Fiverr buyer",
    },
    {
      quote:
        "“I was very happy with the work. It exceeded my expectations. Very quick response time. I would definitely recommend and will use again in the future!!”",
      author: "shanna_philpot",
      role: "Fiverr buyer",
    },
    {
      quote:
        "“Favour did amazing work, thank you!”",
      author: "paragonerin",
      role: "Fiverr buyer",
    },
  ];

  return (
    <section id="reviews" style={{ backgroundColor: "var(--ivory)" }}>
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <p className="eyebrow">Reviews</p>
          <h2>Kind words from authors.</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.4rem",
          }}
          className="rev-grid"
        >
          {reviews.map((rev, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: "2.2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  color: "var(--bronze)",
                  letterSpacing: "3px",
                  fontSize: "1.05rem",
                }}
              >
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.25rem",
                  lineHeight: 1.45,
                  color: "var(--char)",
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {rev.quote}
              </blockquote>

              <cite
                style={{
                  fontStyle: "normal",
                  fontSize: "0.86rem",
                  color: "var(--muted)",
                  borderTop: "1px solid var(--line)",
                  paddingTop: "0.8rem",
                  display: "block",
                }}
              >
                <b style={{ color: "var(--char)" }}>{rev.author}</b>, {rev.role}
              </cite>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "1.8rem",
            fontSize: "0.86rem",
            color: "var(--muted)",
          }}
        >
          Reviews are quoted from my Fiverr profile. Rating: 4.8 from 79 reviews.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .rev-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 650px) {
          .rev-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
