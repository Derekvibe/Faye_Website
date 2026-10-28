"use client";

import React from "react";

export default function Services() {
  const services = [
    {
      title: "Proofreading",
      description:
        "A final check for spelling, grammar and punctuation, so the pages your readers see are clean and consistent.",
      price: "From $20 on Fiverr",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" />
          <path d="M13.5 6.5l4 4" />
        </svg>
      ),
    },
    {
      title: "Copy Editing",
      description:
        "Clarity, consistency and style, sentence by sentence, while your voice stays yours.",
      price: "Included in editing packages",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <rect x="8" y="3" width="12" height="15" rx="2" />
          <path d="M16 21H6a2 2 0 0 1-2-2V7M11 8h6M11 12h6" />
        </svg>
      ),
    },
    {
      title: "Line Editing",
      description:
        "Flow, tone and rhythm, line by line. Ideal for children’s books, rhyme and meter, and narrative flow.",
      price: "From $20 on Fiverr",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <path d="M4 7h16M4 12h10M4 17h13" />
        </svg>
      ),
    },
    {
      title: "Developmental Editing",
      description:
        "Structure, pacing and the big picture of your story, with an annotated manuscript and clear notes.",
      price: "From $40 on Fiverr",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <path d="M12 3l9 5-9 5-9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      ),
    },
    {
      title: "Book Formatting",
      description:
        "Professional interiors for Amazon KDP and beyond, in any trim size, for print and eBook.",
      price: "Available in packages",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13C17 4 14 4.5 12 6z" />
          <path d="M12 6v13" />
        </svg>
      ),
    },
    {
      title: "Book Cover Design",
      description:
        "Covers that make an impression, designed for your genre and ready for every platform.",
      price: "Available in packages",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M5 16l4-4 3 3 3-3 4 4M9 8h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services">
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3.2rem" }}>
          <p className="eyebrow">Services</p>
          <h2 style={{ marginBottom: "1rem" }}>
            Everything your book needs before it meets readers.
          </h2>
          <p className="lead">
            Choose a single service or combine them. Every edit is shown with tracked changes,
            so you always see exactly what changed and why.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.4rem",
          }}
          className="services-cards"
        >
          {services.map((svc, i) => (
            <article
              key={i}
              style={{
                backgroundColor: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "rgba(154, 123, 79, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--line)";
              }}
            >
              {/* Minimalist Icon Frame */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  backgroundColor: "var(--cream)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--bronze)",
                  marginBottom: "0.4rem",
                }}
              >
                {svc.icon}
              </div>

              <h3 style={{ fontSize: "1.35rem", color: "var(--char)" }}>
                {svc.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "0.98rem", lineHeight: 1.6 }}>
                {svc.description}
              </p>

              <span
                style={{
                  marginTop: "auto",
                  paddingTop: "0.8rem",
                  fontSize: "0.82rem",
                  letterSpacing: "0.06em",
                  color: "var(--bronze-dark)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {svc.price}
              </span>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .services-cards {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 760px) {
          .services-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
