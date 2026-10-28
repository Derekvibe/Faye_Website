"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function FormattingStudio() {
  const checkItems = [
    "Amazon KDP formatting for paperback and Kindle eBook",
    "Any book size or trim size, from compact to full page",
    "Clean, consistent interiors: chapters, headings, margins and page numbers",
    "Files prepared for upload, with editable Word files on request",
    "Ready for Amazon and other publishing platforms",
  ];

  const trimSizes = [
    { label: "5 × 8 in", width: 80, height: 128 },
    { label: "5.5 × 8.5 in", width: 88, height: 136 },
    { label: "6 × 9 in", width: 96, height: 144 },
    { label: "8.5 × 11 in", width: 136, height: 176 },
  ];

  const platforms = ["Amazon KDP", "Kindle eBook", "Paperback", "Other platforms"];

  return (
    <section
      id="formatting"
      style={{
        backgroundColor: "var(--dark-surface)",
        color: "var(--dark-copy)",
        overflow: "hidden",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2.5rem, 6vw, 4.5rem)",
            alignItems: "center",
          }}
          className="fmt-grid"
        >
          {/* Left Column: Description & Checks */}
          <div>
            <p className="eyebrow" style={{ color: "#c9a672" }}>
              Book formatting
            </p>

            <h2 style={{ color: "var(--dark-title)", marginBottom: "1rem" }}>
              From manuscript to publication-ready.
            </h2>

            <p style={{ color: "#b9b2a3", fontSize: "1.1rem", lineHeight: 1.65, marginTop: "1rem" }}>
              Whatever size your book is, I format it properly, so it is ready to publish on Amazon KDP and on other platforms.
            </p>

            {/* Checklist */}
            <ul
              style={{
                listStyle: "none",
                margin: "1.8rem 0 2.2rem",
                display: "grid",
                gap: "1rem",
              }}
            >
              {checkItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    fontSize: "1.02rem",
                    color: "#e9e3d6",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none", width: "24px", height: "24px", color: "#c9a672", marginTop: "2px" }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M7.5 12.5l3 3 6-7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.fiverr.com/s/X00Ar10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: "#c9a672",
                borderColor: "#c9a672",
                color: "#1e1e1c",
              }}
            >
              <span>Get my book formatted</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Right Column: Book Trim Size Comparison & Platforms */}
          <div>
            <div
              className="trim-box"
              role="img"
              aria-label="Examples of book trim sizes"
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: "clamp(0.8rem, 2vw, 1.4rem)",
                minHeight: "380px",
                padding: "2.5rem 1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-lg)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0))",
              }}
            >
              {trimSizes.map((trim, i) => (
                <figure
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.9rem",
                    fontSize: "0.85rem",
                    color: "#c9c2b3",
                  }}
                >
                  <div
                    className="trim-page"
                    style={{
                      width: `${trim.width}px`,
                      height: `${trim.height}px`,
                      backgroundColor: "var(--page-paper)",
                      borderRadius: "4px 8px 8px 4px",
                      position: "relative",
                      boxShadow: "0 18px 36px -16px rgba(0, 0, 0, 0.7)",
                      transition: "transform 0.4s ease",
                    }}
                  >
                    {/* Simulated Text Lines */}
                    <div
                      style={{
                        position: "absolute",
                        inset: "14% 12%",
                        background: "repeating-linear-gradient(180deg, rgba(30, 30, 28, 0.28) 0 2px, transparent 2px 9px)",
                      }}
                    />
                    {/* Spine Shadow */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "7%",
                        background: "linear-gradient(90deg, rgba(0, 0, 0, 0.18), transparent)",
                      }}
                    />
                  </div>
                  <figcaption style={{ fontWeight: 600, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                    {trim.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Platform Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginTop: "1.6rem",
              }}
            >
              {platforms.map((p, i) => (
                <span
                  key={i}
                  style={{
                    border: "1.5px solid rgba(201, 166, 114, 0.6)",
                    color: "#e9dcc3",
                    borderRadius: "999px",
                    padding: "0.45rem 1.05rem",
                    fontSize: "0.86rem",
                    fontWeight: 500,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .fmt-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 760px) {
          .trim-box {
            min-height: 280px !important;
            padding: 1.5rem 0.8rem !important;
            gap: 0.6rem !important;
          }
          .trim-page {
            zoom: 0.78;
          }
        }
        figure:hover .trim-page {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
