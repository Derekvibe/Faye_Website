import React from "react";

export default function Ticker() {
  const items = [
    "Proofreading",
    "Copy Editing",
    "Line Editing",
    "Developmental Editing",
    "Amazon KDP Formatting",
    "Book Cover Design",
    "Tracked Changes",
    "Kindle & Paperback",
    "Trim Size Layout",
    "Indie Authors",
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: "var(--dark-surface)",
        color: "var(--dark-copy)",
        padding: "1.1rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "tickerScroll 36s linear infinite",
          gap: "2.5rem",
        }}
      >
        {[...items, ...items, ...items].map((text, idx) => (
          <span
            key={idx}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.35rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "2.5rem",
              letterSpacing: "0.02em",
              color: "#F6F1E7",
            }}
          >
            {text}
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--bronze)",
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
