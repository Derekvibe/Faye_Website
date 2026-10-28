"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  const skills = [
    "Proofreading",
    "Editing",
    "Microsoft Word",
    "Typing",
    "Content writing",
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--paper)",
        borderBlock: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "clamp(2.5rem, 6vw, 4.5rem)",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Portrait with Bronze Offset Frame */}
          <div
            style={{
              position: "relative",
              maxWidth: "440px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "18px -18px -18px 18px",
                border: "2px solid var(--bronze)",
                borderRadius: "26px",
                opacity: 0.6,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "var(--cream)",
              }}
            >
              <Image
                src="/assets/img/favour-sm.webp"
                alt="Favour, book editor and book cover designer, smiling in a white floral top"
                fill
                sizes="(max-width: 980px) 80vw, 440px"
                style={{
                  objectFit: "cover",
                  objectPosition: "30% 20%",
                }}
              />
            </div>
          </div>

          {/* Bio & Authentic Stats */}
          <div>
            <p className="eyebrow">About me</p>
            <h2 style={{ marginBottom: "1.2rem" }}>Hi, I’m Favour.</h2>

            <p style={{ marginTop: "1.2rem", color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              I am a book editor and designer with more than seven years of experience in writing and editing.
              I help authors turn a finished draft into a book they are proud to publish, whether that means a careful
              proofread, a deep developmental edit, clean Amazon KDP formatting or a cover that stands out.
            </p>

            <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              I work with fiction, nonfiction, children’s books, Christian and religious books, academic works and more.
              Clear communication, honest feedback and attention to detail are part of every project.
            </p>

            {/* Stats Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                marginTop: "2rem",
                paddingTop: "1.8rem",
                borderTop: "1px solid var(--line)",
              }}
              className="about-stats"
            >
              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2.4rem",
                    color: "var(--char)",
                    lineHeight: 1,
                  }}
                >
                  7+
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  years of experience
                </span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2.4rem",
                    color: "var(--char)",
                    lineHeight: 1,
                  }}
                >
                  4.8
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  Fiverr rating
                </span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2.4rem",
                    color: "var(--char)",
                    lineHeight: 1,
                  }}
                >
                  79
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  Fiverr reviews
                </span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2.4rem",
                    color: "var(--char)",
                    lineHeight: 1,
                  }}
                >
                  All
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  genres
                </span>
              </div>
            </div>

            {/* Skills Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1.6rem",
              }}
            >
              {skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.4rem 0.95rem",
                    backgroundColor: "var(--cream)",
                    borderRadius: "999px",
                    fontWeight: 500,
                    color: "var(--char)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 760px) {
          .about-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
