"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Which Edit?", href: "#stages" },
    { label: "Formatting", href: "#formatting" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 100,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--ivory) 94%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--line)" : "none",
        padding: scrolled ? "0.85rem 0" : "1.3rem 0",
      }}
    >
      <div
        className="wrap header-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <a
          href="#top"
          aria-label="Favour, book editor and book cover designer"
          style={{
            display: "block",
            textDecoration: "none",
            flexShrink: 0,
            width: "clamp(170px, 55vw, 260px)",
          }}
        >
          <Image
            src="/brand-logo.svg"
            alt=""
            aria-hidden
            className="brand-logo-on-light"
            width={560}
            height={130}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src="/brand-logo-light.svg"
            alt=""
            aria-hidden
            className="brand-logo-on-dark"
            width={560}
            height={130}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </a>

        {/* Clean, Uncluttered Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: "0.93rem",
                fontWeight: 500,
                color: "var(--ink)",
                textDecoration: "none",
                position: "relative",
                padding: "0.2rem 0",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button (Desktop) & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <ThemeToggle />
          <a
            href="https://www.fiverr.com/s/X00Ar10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm desktop-cta"
            style={{ display: "none" }}
          >
            <span>Hire me on Fiverr</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="mobile-toggle"
            style={{
              background: "none",
              border: 0,
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--char)",
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--ivory)",
            borderBottom: "1px solid var(--line)",
            boxShadow: "0 20px 30px -15px rgba(30, 25, 20, 0.15)",
            padding: "1.6rem 6% 2.4rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            maxHeight: "calc(100vh - 75px)",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.15rem",
                fontFamily: "var(--serif)",
                color: "var(--char)",
                textDecoration: "none",
                padding: "0.4rem 0",
                borderBottom: "1px solid rgba(38, 36, 33, 0.08)",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://www.fiverr.com/s/X00Ar10"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{
              marginTop: "0.8rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <span>Hire me on Fiverr</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1199px) {
          .header-inner {
            gap: 0.75rem !important;
          }
        }
        @media (min-width: 1200px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--bronze) !important;
        }
      `}</style>
    </header>
  );
}
