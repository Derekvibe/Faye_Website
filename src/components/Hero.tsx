"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      style={{
        paddingTop: "clamp(8rem, 13vw, 10.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
        background:
          "radial-gradient(900px 500px at 85% 20%, rgba(154, 123, 79, 0.16), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(154, 123, 79, 0.10), transparent 60%), var(--ivory)",
        overflow: "hidden",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Authentic Editorial Copy */}
          <div>
            <p className="eyebrow">From manuscript to masterpiece</p>

            <h1 style={{ marginBottom: "1.4rem" }}>
              Your story deserves <span className="accent">the best.</span>
            </h1>

            <p className="lead" style={{ marginBottom: "2.2rem" }}>
              Proofreading, editing, Amazon KDP formatting and cover design for authors.
              One careful professional, from your first draft to a book that is ready to publish.
            </p>

            {/* Clean CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <a
                href="https://www.fiverr.com/s/X00Ar10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Message me on Fiverr</span>
                <ArrowUpRight size={18} />
              </a>

              <a href="#portfolio" className="btn btn-secondary">
                <span>See my work</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div
              style={{
                display: "flex",
                gap: "clamp(1.5rem, 3.5vw, 2.5rem)",
                flexWrap: "wrap",
                paddingTop: "1.8rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <div>
                <strong
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2rem",
                    color: "var(--char)",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >
                  7+
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  years of writing and editing
                </span>
              </div>

              <div>
                <strong
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2rem",
                    color: "var(--char)",
                    lineHeight: 1.1,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  4.8{" "}
                  <span style={{ color: "var(--bronze)", fontSize: "0.95rem", letterSpacing: "2px" }}>
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  from 74 Fiverr reviews
                </span>
              </div>

              <div>
                <strong
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "2rem",
                    color: "var(--char)",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >
                  All
                </strong>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                  genres welcome
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Portrait and Floating Covers */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              padding: "1rem 0 2rem",
            }}
            className="hero-visual"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                position: "relative",
                width: "min(440px, 80%)",
                aspectRatio: "4/5",
              }}
            >
              {/* Outer Decorative Bronze Accent Line */}
              <div
                style={{
                  position: "absolute",
                  inset: "-14px -14px 14px 14px",
                  border: "2px solid var(--bronze)",
                  borderRadius: "230px 230px 30px 30px",
                  opacity: 0.7,
                  pointerEvents: "none",
                  transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
                  transition: "transform 0.15s ease-out",
                }}
              />

              {/* Arched Portrait Frame */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "220px 220px 26px 26px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  backgroundColor: "var(--cream)",
                }}
              >
                <Image
                  src="/assets/img/favour.webp"
                  alt="Portrait of Favour, book editor and cover designer"
                  fill
                  sizes="(max-width: 980px) 78vw, 440px"
                  loading="eager"
                  style={{
                    objectFit: "cover",
                    objectPosition: "30% 20%",
                  }}
                />
              </div>

              {/* Clean Human Badge */}
              <div
                style={{
                  position: "absolute",
                  right: "-12%",
                  top: "4%",
                  backgroundColor: "var(--paper)",
                  padding: "0.75rem 1.15rem",
                  borderRadius: "14px",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--line)",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.15,
                  zIndex: 3,
                  transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                  transition: "transform 0.15s ease-out",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.35rem",
                    color: "var(--char)",
                  }}
                >
                  @faye_edit01
                </span>
                <span
                  style={{
                    fontSize: "0.74rem",
                    color: "var(--muted)",
                  }}
                >
                  on Fiverr
                </span>
              </div>

              {/* Floating Book Mockup 1: Holy Spirit */}
              <div
                className="hero-float float-1"
                style={{
                  position: "absolute",
                  width: "118px",
                  left: "-16%",
                  bottom: "3%",
                  zIndex: 2,
                  filter: "drop-shadow(0 22px 24px rgba(40, 25, 10, 0.32))",
                  transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotate(-8deg)`,
                  transition: "transform 0.15s ease-out",
                }}
              >
                <Image
                  src="/assets/img/mockups/holy_spirit.webp"
                  alt="Book mockup: The Holy Spirit and I"
                  width={300}
                  height={400}
                  loading="eager"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Floating Book Mockup 2: Little Peace */}
              <div
                className="hero-float float-2"
                style={{
                  position: "absolute",
                  width: "104px",
                  left: "-12%",
                  top: "2%",
                  zIndex: 2,
                  filter: "drop-shadow(0 20px 22px rgba(40, 25, 10, 0.28))",
                  transform: `translate(${mousePos.x * 14}px, ${mousePos.y * 14}px) rotate(6deg)`,
                  transition: "transform 0.15s ease-out",
                }}
              >
                <Image
                  src="/assets/img/mockups/little_peace.webp"
                  alt="Book mockup: A Little More Peace"
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Floating Book Mockup 3: Weather */}
              <div
                className="hero-float float-3"
                style={{
                  position: "absolute",
                  width: "104px",
                  right: "-6%",
                  bottom: "-6%",
                  zIndex: 2,
                  filter: "drop-shadow(0 20px 22px rgba(40, 25, 10, 0.28))",
                  transform: `translate(${mousePos.x * -16}px, ${mousePos.y * -16}px) rotate(-4deg)`,
                  transition: "transform 0.15s ease-out",
                }}
              >
                <Image
                  src="/assets/img/mockups/weather.webp"
                  alt="Book mockup: Weather the Wait"
                  width={300}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-visual {
            order: -1;
          }
        }
        @media (max-width: 760px) {
          .float-1 {
            width: 86px !important;
            left: -8% !important;
          }
          .float-2 {
            width: 78px !important;
            right: -8% !important;
            left: auto !important;
          }
          .float-3 {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
