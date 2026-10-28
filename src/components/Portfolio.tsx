"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioBooks } from "@/data/portfolioData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {
  const [activeGenre, setActiveGenre] = useState<string>("all");
  const [activeBookIndex, setActiveBookIndex] = useState<number | null>(null);

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Fiction", value: "fiction" },
    { label: "Nonfiction", value: "nonfiction" },
    { label: "Children’s", value: "children" },
    { label: "Christian", value: "christian" },
    { label: "Academic", value: "academic" },
  ];

  const visibleBooks = portfolioBooks.filter((book) => {
    return activeGenre === "all" || book.genre === activeGenre;
  });

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeBookIndex === null) return;

      if (e.key === "Escape") {
        setActiveBookIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveBookIndex((prev) =>
          prev !== null ? (prev - 1 + visibleBooks.length) % visibleBooks.length : 0
        );
      } else if (e.key === "ArrowRight") {
        setActiveBookIndex((prev) =>
          prev !== null ? (prev + 1) % visibleBooks.length : 0
        );
      }
    };

    if (activeBookIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeBookIndex, visibleBooks]);

  const activeBook = activeBookIndex !== null ? visibleBooks[activeBookIndex] : null;

  return (
    <section id="portfolio">
      <div className="wrap">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <p className="eyebrow">Portfolio</p>
          <h2 style={{ marginBottom: "1rem" }}>
            Covers that make an impression.
          </h2>
          <p className="lead">
            A selection of book covers I have designed, across every genre. Click any cover to see it larger.
          </p>
        </div>

        {/* Clean Genre Filter Buttons */}
        <div
          role="group"
          aria-label="Filter covers by genre"
          style={{
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginBottom: "2.8rem",
          }}
        >
          {filterButtons.map((btn) => {
            const isSelected = activeGenre === btn.value;
            return (
              <button
                key={btn.value}
                onClick={() => {
                  setActiveGenre(btn.value);
                  setActiveBookIndex(null);
                }}
                aria-pressed={isSelected}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  padding: "0.65rem 1.35rem",
                  borderRadius: "999px",
                  border: isSelected ? "1.5px solid var(--char)" : "1.5px solid var(--line)",
                  backgroundColor: isSelected ? "var(--char)" : "var(--paper)",
                  color: isSelected ? "var(--paper)" : "var(--ink)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Cover Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
            gap: "2.4rem 1.6rem",
            alignItems: "start",
          }}
          className="portfolio-grid"
        >
          {visibleBooks.map((book, idx) => (
            <button
              key={book.id}
              onClick={() => setActiveBookIndex(idx)}
              aria-label={`View cover of ${book.title}`}
              style={{
                border: 0,
                background: "none",
                padding: 0,
                cursor: "zoom-in",
                textAlign: "left",
                font: "inherit",
                display: "block",
                width: "100%",
                transition: "transform 0.35s ease",
              }}
              className="cover-card"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  height: "clamp(250px, 26vw, 350px)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "auto",
                    maxWidth: "100%",
                    height: "100%",
                    aspectRatio: "1 / 1.5",
                    borderRadius: "6px",
                    overflow: "hidden",
                    backgroundColor: "var(--cream)",
                    boxShadow: "0 18px 34px -18px rgba(40, 25, 10, 0.55)",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  }}
                  className="cover-img-wrap"
                >
                  <Image
                    src={book.coverImg}
                    alt={`Book cover: ${book.title} by ${book.author}`}
                    fill
                    sizes="(max-width: 760px) 50vw, 240px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "0.9rem", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.4 }}>
                <b style={{ display: "block", color: "var(--char)", fontSize: "0.98rem", fontWeight: 600 }}>
                  {book.title}
                </b>
                <span>{book.author}</span>
              </div>
            </button>
          ))}
        </div>

        {/* 3D Shelf Slider ("Ready for the shelf") */}
        <div style={{ marginTop: "5.5rem" }}>
          <h3 style={{ fontSize: "1.6rem", marginBottom: "1.4rem", color: "var(--char)" }}>
            Ready for the shelf
          </h3>
          <div
            className="mockup-rail"
            tabIndex={0}
            aria-label="Book mockups, scroll sideways"
            style={{
              display: "flex",
              gap: "2rem",
              overflowX: "auto",
              padding: "1rem 0.5rem 2.4rem",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "thin",
              scrollbarColor: "var(--bronze) transparent",
            }}
          >
            {portfolioBooks.map((book) => (
              <figure
                key={`mockup-${book.id}`}
                style={{
                  flex: "none",
                  scrollSnapAlign: "center",
                  width: "clamp(190px, 24vw, 260px)",
                  margin: 0,
                  transition: "transform 0.4s ease",
                }}
                className="mockup-fig"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3 / 4",
                    filter: "drop-shadow(0 22px 22px rgba(40, 25, 10, 0.3))",
                  }}
                >
                  <Image
                    src={book.mockupImg}
                    alt={`3D mockup of ${book.title}`}
                    fill
                    sizes="260px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeBook && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cover viewer"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20, 18, 15, 0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "2rem",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveBookIndex(null);
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveBookIndex(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "1.2rem",
              background: "rgba(255, 255, 255, 0.12)",
              color: "#fff",
              border: 0,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              fontSize: "1.6rem",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bronze)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)")}
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={() =>
              setActiveBookIndex((prev) =>
                prev !== null ? (prev - 1 + visibleBooks.length) % visibleBooks.length : 0
              )
            }
            aria-label="Previous"
            style={{
              position: "absolute",
              left: "1.2rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.12)",
              color: "#fff",
              border: 0,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bronze)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)")}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next button */}
          <button
            onClick={() =>
              setActiveBookIndex((prev) =>
                prev !== null ? (prev + 1) % visibleBooks.length : 0
              )
            }
            aria-label="Next"
            style={{
              position: "absolute",
              right: "1.2rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.12)",
              color: "#fff",
              border: 0,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bronze)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)")}
          >
            <ChevronRight size={28} />
          </button>

          {/* Cover Image & Caption */}
          <figure
            style={{
              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              margin: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "min(480px, 80vw)",
                aspectRatio: "1 / 1.5",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.8)",
              }}
            >
              <Image
                src={activeBook.coverImg}
                alt={`Book cover: ${activeBook.title} by ${activeBook.author}`}
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <figcaption style={{ color: "#e9e3d6", textAlign: "center", fontSize: "1rem" }}>
              <strong>{activeBook.title}</strong> by {activeBook.author}
            </figcaption>
          </figure>
        </div>
      )}

      <style jsx>{`
        .cover-card:hover .cover-img-wrap {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 44px -20px rgba(40, 25, 10, 0.65);
        }
        .mockup-fig:hover {
          transform: translateY(-10px) rotate(-1.5deg);
        }
        @media (max-width: 760px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
