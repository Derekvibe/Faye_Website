import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const books = [
    { src: "/assets/img/mockups/love.webp", alt: "Love in All Wrong Places" },
    { src: "/assets/img/mockups/grow.webp", alt: "Grow as They Grow" },
    { src: "/assets/img/mockups/weather.webp", alt: "Weather the Wait" },
    { src: "/assets/img/mockups/holy_spirit.webp", alt: "The Holy Spirit and I" },
    { src: "/assets/img/mockups/confidence.webp", alt: "Upgrade Your Self-Confidence" },
  ];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--dark-surface)",
        color: "var(--dark-copy)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
      }}
    >
      {/* Background Subtle Radial Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(700px 360px at 50% 0%, rgba(154, 123, 79, 0.35), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        {/* Fan of Book Mockups */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(0.6rem, 1.8vw, 1.2rem)",
            marginBottom: "3rem",
          }}
          className="cta-books"
        >
          {books.map((b, i) => (
            <div
              key={i}
              style={{
                width: "clamp(75px, 12vw, 150px)",
                filter: "drop-shadow(0 18px 18px rgba(0, 0, 0, 0.5))",
                transform: i % 2 === 1 ? "translateY(18px)" : "translateY(0)",
                transition: "transform 0.3s ease",
              }}
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={300}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>

        <h2
          style={{
            color: "var(--dark-title)",
            fontSize: "clamp(2.4rem, 5.4vw, 4.2rem)",
            marginBottom: "1.2rem",
            lineHeight: 1.15,
          }}
        >
          Let’s bring your <span className="accent">book to life.</span>
        </h2>

        <p
          style={{
            color: "var(--dark-muted)",
            maxWidth: "52ch",
            margin: "0 auto 2.2rem",
            fontSize: "1.15rem",
          }}
        >
          Message me to get started. I would love to hear about your book.
        </p>

        <a
          href="https://www.fiverr.com/s/X00Ar10"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            background: "var(--bronze)",
            borderColor: "var(--bronze)",
            color: "#fff",
            padding: "1rem 2rem",
          }}
        >
          <span>Message me on Fiverr</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
