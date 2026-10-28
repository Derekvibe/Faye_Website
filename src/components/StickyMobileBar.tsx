"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div
      className="mobile-sticky-bar"
      style={{
        display: "none",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 90,
        padding: "0.75rem 4%",
        backgroundColor: "color-mix(in srgb, var(--ivory) 96%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 -1px 0 var(--line)",
      }}
    >
      <a
        href="https://www.fiverr.com/s/X00Ar10"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          padding: "0.85rem 1rem",
        }}
      >
        <span>Hire me on Fiverr</span>
        <ArrowUpRight size={17} />
      </a>

      <style jsx>{`
        @media (max-width: 760px) {
          .mobile-sticky-bar {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
