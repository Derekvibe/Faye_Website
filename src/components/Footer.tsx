"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const subscribeToYear = () => () => {};
const getCurrentYear = () => new Date().getUTCFullYear();
const getServerYear = () => 2026;

export default function Footer() {
  const year = useSyncExternalStore(
    subscribeToYear,
    getCurrentYear,
    getServerYear,
  );

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Formatting", href: "#formatting" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--dark-surface)",
        color: "#a49d8f",
        padding: "3.2rem 0 5.5rem",
        fontSize: "0.9rem",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#top"
          aria-label="Favour, book editor and book cover designer"
          style={{
            textDecoration: "none",
            display: "block",
            width: "min(260px, 100%)",
          }}
        >
          <Image
            src="/brand-logo-light.svg"
            alt=""
            aria-hidden
            width={560}
            height={130}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </a>

        <nav
          aria-label="Footer"
          style={{
            display: "flex",
            gap: "1.6rem",
            flexWrap: "wrap",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#d8cfbd",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.fiverr.com/s/X00Ar10"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--bronze)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              fontWeight: 600,
            }}
          >
            <span>Fiverr</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <p style={{ margin: 0, color: "#8E877B" }}>
          &copy; {year} Favour. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
