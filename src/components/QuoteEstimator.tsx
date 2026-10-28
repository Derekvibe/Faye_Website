"use client";

import React, { useState } from "react";
import { Calculator, Check, Copy, ArrowUpRight, Clock } from "lucide-react";

export default function QuoteEstimator() {
  const [wordCount, setWordCount] = useState<number>(35000);
  const [genre, setGenre] = useState<string>("Fiction");
  const [services, setServices] = useState<{
    proofreading: boolean;
    copyEditing: boolean;
    lineEditing: boolean;
    developmental: boolean;
    formatting: boolean;
    coverDesign: boolean;
  }>({
    proofreading: true,
    copyEditing: false,
    lineEditing: false,
    developmental: false,
    formatting: true,
    coverDesign: true,
  });

  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const toggleService = (key: keyof typeof services) => {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Turnaround and cost calculation
  const calculateEstimate = () => {
    let minCost = 0;
    let maxCost = 0;
    let days = 2;

    if (services.proofreading) {
      const cost = Math.max(20, Math.round(wordCount * 0.005));
      minCost += cost;
      maxCost += Math.round(cost * 1.25);
      days += Math.ceil(wordCount / 18000);
    }
    if (services.copyEditing) {
      const cost = Math.max(35, Math.round(wordCount * 0.008));
      minCost += cost;
      maxCost += Math.round(cost * 1.25);
      days += Math.ceil(wordCount / 14000);
    }
    if (services.lineEditing) {
      const cost = Math.max(25, Math.round(wordCount * 0.009));
      minCost += cost;
      maxCost += Math.round(cost * 1.25);
      days += Math.ceil(wordCount / 12000);
    }
    if (services.developmental) {
      const cost = Math.max(40, Math.round(wordCount * 0.012));
      minCost += cost;
      maxCost += Math.round(cost * 1.3);
      days += Math.ceil(wordCount / 9000);
    }
    if (services.formatting) {
      minCost += 40;
      maxCost += 75;
      days += 2;
    }
    if (services.coverDesign) {
      minCost += 45;
      maxCost += 85;
      days += 2;
    }

    if (minCost === 0) {
      return { min: 20, max: 40, days: 2 };
    }

    return { min: minCost, max: maxCost, days: Math.min(days, 14) };
  };

  const estimate = calculateEstimate();

  const handleCopyBrief = async () => {
    const selectedList = Object.entries(services)
      .filter(([, selected]) => selected)
      .map(([key]) => {
        switch (key) {
          case "proofreading":
            return "Proofreading";
          case "copyEditing":
            return "Copy Editing";
          case "lineEditing":
            return "Line Editing";
          case "developmental":
            return "Developmental Editing";
          case "formatting":
            return "Amazon KDP Interior Formatting";
          case "coverDesign":
            return "Book Cover Design";
          default:
            return key;
        }
      });

    const brief = `Hi Favour,\n\nI would love to get a custom quote on Fiverr for my upcoming book project:\n\n• Manuscript Genre: ${genre}\n• Approximate Word Count: ${wordCount.toLocaleString()} words\n• Services Needed: ${selectedList.join(", ") || "General Inquiry"}\n• Estimated Delivery Target: ~${estimate.days} days\n\nPlease let me know your availability and how we can get started!`;

    try {
      await navigator.clipboard.writeText(brief);
      setCopyError(null);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Unable to copy the project brief.", error);
      setCopied(false);
      setCopyError("Clipboard access failed. Please copy the project details manually.");
    }
  };

  return (
    <section id="calculator" style={{ backgroundColor: "var(--paper)", borderBlock: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <p className="eyebrow">Interactive Project Estimator</p>
          <h2 style={{ marginBottom: "1.2rem" }}>
            Calculate your project scope & turnaround.
          </h2>
          <p className="lead">
            Select your book&apos;s word count and desired services to generate a customized project estimate.
            You can copy this pre-formatted brief directly into your Fiverr order inquiry.
          </p>
        </div>

        {/* Calculator Interactive Card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "2.5rem",
            backgroundColor: "var(--ivory)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
          }}
          className="calc-grid"
        >
          {/* Left Inputs Column */}
          <div style={{ padding: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {/* Word Count Slider */}
            <div style={{ marginBottom: "2.4rem" }}>
              <div
                className="word-count-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.8rem",
                }}
              >
                <label style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--char)" }}>
                  Manuscript Word Count:
                </label>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.6rem",
                    color: "var(--bronze)",
                    fontWeight: 600,
                  }}
                >
                  {wordCount.toLocaleString()} words
                </span>
              </div>

              <input
                type="range"
                min="2000"
                max="120000"
                step="1000"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--bronze)",
                  cursor: "pointer",
                  height: "8px",
                }}
              />

              <div
                className="word-count-ranges"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  marginTop: "0.4rem",
                }}
              >
                <span>2,000 (Short Story/Article)</span>
                <span>50,000 (Standard Novel)</span>
                <span>120,000+ (Epic)</span>
              </div>
            </div>

            {/* Genre Selector */}
            <div style={{ marginBottom: "2.4rem" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--char)",
                  marginBottom: "0.8rem",
                }}
              >
                Manuscript Genre:
              </label>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "Fiction",
                  "Nonfiction / Self-Help",
                  "Children's Book",
                  "Christian / Spiritual",
                  "Academic / Memoir",
                ].map((g) => {
                  const isSelected = genre === g;
                  return (
                    <button
                      key={g}
                      onClick={() => setGenre(g)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "var(--radius-full)",
                        border: isSelected ? "1.5px solid var(--char)" : "1px solid var(--line)",
                        backgroundColor: isSelected ? "var(--char)" : "var(--paper)",
                        color: isSelected ? "var(--paper)" : "var(--ink)",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Services Checklist */}
            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--char)",
                  marginBottom: "0.8rem",
                }}
              >
                Required Services:
              </label>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {[
                  { key: "proofreading", label: "Proofreading", note: "Final typo & grammar check" },
                  { key: "copyEditing", label: "Copy Editing", note: "Clarity, syntax & consistency" },
                  { key: "lineEditing", label: "Line Editing", note: "Tone, voice & lyrical flow" },
                  { key: "developmental", label: "Developmental", note: "Big-picture story structure" },
                  { key: "formatting", label: "KDP Interior Formatting", note: "Paperback & Kindle eBook" },
                  { key: "coverDesign", label: "Book Cover Design", note: "Full wrap + 3D mockups" },
                ].map((svc) => {
                  const isChecked = services[svc.key as keyof typeof services];
                  return (
                    <div
                      key={svc.key}
                      onClick={() => toggleService(svc.key as keyof typeof services)}
                      style={{
                        padding: "0.85rem 1rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: isChecked ? "var(--paper)" : "rgba(255, 255, 255, 0.4)",
                        border: isChecked ? "1.5px solid var(--bronze)" : "1px solid var(--line)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.7rem",
                        transition: "all 0.2s",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "4px",
                          backgroundColor: isChecked ? "var(--bronze)" : "transparent",
                          border: isChecked ? "1.5px solid var(--bronze)" : "1.5px solid var(--line-strong)",
                          color: "#FFFFFF",
                          display: "grid",
                          placeItems: "center",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--char)" }}>
                          {svc.label}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--muted)" }}>
                          {svc.note}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Column */}
          <div
            style={{
              backgroundColor: "var(--dark-surface)",
              color: "var(--paper)",
              padding: "clamp(2rem, 4vw, 2.8rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--bronze-light)",
                  marginBottom: "1.2rem",
                }}
              >
                <Calculator size={16} />
                <span>Estimate Summary</span>
              </div>

              <h3 style={{ color: "#FFFFFF", fontSize: "1.6rem", marginBottom: "0.6rem" }}>
                Target Project Scope
              </h3>

              <p style={{ color: "#B8B1A2", fontSize: "0.88rem", marginBottom: "1.8rem" }}>
                Based on {wordCount.toLocaleString()} words for a {genre} title.
              </p>

              {/* Price Estimate Range Box */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.4rem",
                  marginBottom: "1.4rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#A8A193", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Estimated Fiverr Price Guide
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "2.3rem",
                    color: "#FFFFFF",
                    fontWeight: 400,
                    margin: "0.3rem 0",
                  }}
                >
                  ${estimate.min} – ${estimate.max}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--bronze-light)" }}>
                  *Matches standard Fiverr packages. Exact custom quote confirmed upon review.
                </div>
              </div>

              {/* Turnaround Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  padding: "0.9rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "2rem",
                }}
              >
                <Clock size={20} color="var(--bronze-light)" />
                <div>
                  <div style={{ fontSize: "0.82rem", color: "#A8A193" }}>Estimated Turnaround</div>
                  <div style={{ fontWeight: 600, color: "#FFFFFF", fontSize: "0.95rem" }}>
                    ~{estimate.days} business days
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <button
                onClick={handleCopyBrief}
                className="btn btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? "Brief Copied to Clipboard!" : "Copy Project Brief"}</span>
              </button>
              {copyError && (
                <p role="alert" style={{ color: "#FECACA", fontSize: "0.85rem" }}>
                  {copyError}
                </p>
              )}

              <a
                href="https://www.fiverr.com/s/X00Ar10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
              >
                <span>Message Favour on Fiverr</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calc-grid > div {
          min-width: 0;
        }
        @media (max-width: 920px) {
          .calc-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          .word-count-row,
          .word-count-ranges {
            flex-wrap: wrap;
            gap: 0.3rem 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
