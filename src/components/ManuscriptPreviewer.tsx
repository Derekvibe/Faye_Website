"use client";

import React, { useState } from "react";
import { FileText, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

interface SampleData {
  genre: string;
  title: string;
  raw: string;
  tracked: React.ReactNode;
  final: string;
  comment: {
    author: string;
    note: string;
  };
}

const samples: Record<string, SampleData> = {
  fiction: {
    genre: "Fiction / Thriller",
    title: "Chapter 1: The Midnight Call",
    raw: "The rain was pouring down real hard on the windshield. Mark looked at his watch, it was almost midnight. He felt very scared because someone was definitely following him.",
    tracked: (
      <span>
        The rain{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          was pouring down real hard
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          hammered relentlessly
        </span>{" "}
        against the windshield. Mark glanced at his watch
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          , it was
        </span>
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          —barely three minutes past
        </span>{" "}
        midnight.{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          He felt very scared because someone was definitely following him.
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          A chill tightened down his spine; the dark sedan behind him hadn&apos;t turned off its high beams for seven miles.
        </span>
      </span>
    ),
    final:
      "The rain hammered relentlessly against the windshield. Mark glanced at his watch—barely three minutes past midnight. A chill tightened down his spine; the dark sedan behind him hadn't turned off its high beams for seven miles.",
    comment: {
      author: "Favour (Editor)",
      note: "Strengthened the sensory verbs and converted the 'telling' ('felt very scared') into visceral atmospheric tension that heightens suspense.",
    },
  },
  nonfiction: {
    genre: "Nonfiction / Self-Help",
    title: "The Discipline Principle",
    raw: "In todays busy world, people find it hard to focus on there daily goals. You have to make sure you plan your day properly in order to achieve success.",
    tracked: (
      <span>
        In{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          todays
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          today&apos;s
        </span>{" "}
        distracted landscape, most professionals struggle to sustain focus on{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          there
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          their
        </span>{" "}
        core priorities.{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          You have to make sure you plan your day properly in order to achieve success.
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          Structuring each morning deliberately transforms ambition from an elusive wish into measurable momentum.
        </span>
      </span>
    ),
    final:
      "In today's distracted landscape, most professionals struggle to sustain focus on their core priorities. Structuring each morning deliberately transforms ambition from an elusive wish into measurable momentum.",
    comment: {
      author: "Favour (Editor)",
      note: "Corrected possessive apostrophe and homophone ('there' -> 'their'), and elevated the authoritative tone for leadership readership.",
    },
  },
  children: {
    genre: "Children's Book",
    title: "Barnaby's Big Leap",
    raw: "Little rabbit Barnaby hopped along the green grass. He saw a tall fence and wondered how he could jump over it.",
    tracked: (
      <span>
        Little rabbit Barnaby{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          hopped along the green grass
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          bounced through the clover dew
        </span>
        .{" "}
        <span style={{ textDecoration: "line-through", color: "#DC2626", backgroundColor: "#FEE2E2", padding: "0 2px" }}>
          He saw a tall fence and wondered how he could jump over it.
        </span>{" "}
        <span style={{ color: "#16A34A", backgroundColor: "#DCFCE7", padding: "0 2px", fontWeight: 600 }}>
          Ahead stood a fence so grand and high—could one brave leap touch the morning sky?
        </span>
      </span>
    ),
    final:
      "Little rabbit Barnaby bounced through the clover dew. Ahead stood a fence so grand and high—could one brave leap touch the morning sky?",
    comment: {
      author: "Favour (Editor)",
      note: "Introduced engaging poetic meter and playful internal rhyming suited for read-aloud early readers.",
    },
  },
};

export default function ManuscriptPreviewer() {
  const [selectedGenre, setSelectedGenre] = useState<"fiction" | "nonfiction" | "children">("fiction");
  const [viewMode, setViewMode] = useState<"tracked" | "before" | "final">("tracked");

  const currentSample = samples[selectedGenre];

  return (
    <section
      id="demo"
      style={{
        backgroundColor: "var(--paper)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <p className="eyebrow">Interactive Manuscript Demo</p>
          <h2 style={{ marginBottom: "1.2rem" }}>
            Experience the precision of tracked changes.
          </h2>
          <p className="lead">
            Every edit you receive from Favour is transparent. Switch between the raw author draft,
            the tracked changes view with margin feedback, and the polished publication-ready copy.
          </p>
        </div>

        {/* Demo Controller Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.2rem",
            marginBottom: "1.5rem",
          }}
          className="demo-controls"
        >
          {/* Genre Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              backgroundColor: "var(--cream)",
              padding: "0.3rem",
              borderRadius: "999px",
            }}
            className="demo-genre-tabs"
          >
            {(["fiction", "nonfiction", "children"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedGenre(key)}
                style={{
                  border: 0,
                  backgroundColor: selectedGenre === key ? "var(--char)" : "transparent",
                  color: selectedGenre === key ? "var(--paper)" : "var(--muted)",
                  padding: "0.5rem 1.15rem",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textTransform: "capitalize",
                }}
              >
                {key === "children" ? "Children's Story" : key}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div
            style={{
              display: "flex",
              gap: "0.4rem",
              backgroundColor: "var(--ivory)",
              padding: "0.3rem",
              borderRadius: "999px",
              border: "1px solid var(--line)",
            }}
            className="demo-mode-tabs"
          >
            <button
              onClick={() => setViewMode("before")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 1rem",
                borderRadius: "999px",
                border: 0,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: viewMode === "before" ? "var(--paper)" : "transparent",
                color: viewMode === "before" ? "var(--char)" : "var(--muted)",
                boxShadow: viewMode === "before" ? "var(--shadow-sm)" : "none",
              }}
            >
              <FileText size={14} />
              <span>1. Raw Draft</span>
            </button>

            <button
              onClick={() => setViewMode("tracked")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 1rem",
                borderRadius: "999px",
                border: 0,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: viewMode === "tracked" ? "var(--bronze)" : "transparent",
                color: viewMode === "tracked" ? "#FFFFFF" : "var(--muted)",
                boxShadow: viewMode === "tracked" ? "var(--shadow-gold)" : "none",
              }}
            >
              <Sparkles size={14} />
              <span>2. Tracked Changes</span>
            </button>

            <button
              onClick={() => setViewMode("final")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 1rem",
                borderRadius: "999px",
                border: 0,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: viewMode === "final" ? "var(--paper)" : "transparent",
                color: viewMode === "final" ? "#15803D" : "var(--muted)",
                boxShadow: viewMode === "final" ? "var(--shadow-sm)" : "none",
              }}
            >
              <CheckCircle2 size={14} />
              <span>3. Publication Ready</span>
            </button>
          </div>
        </div>

        {/* Manuscript Document Paper Simulation */}
        <div
          style={{
            backgroundColor: "var(--paper)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
          }}
          className="manuscript-document"
        >
          {/* Top Document Header Ribbon */}
          <div
            style={{
              padding: "0.9rem 1.8rem",
              backgroundColor: "var(--cream-light)",
              borderBottom: "1px solid var(--line)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.82rem",
              color: "var(--muted)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#2B579A",
                }}
              />
              <span style={{ fontWeight: 600, color: "var(--char)" }}>
                {currentSample.title} — Microsoft Word Tracked Changes
              </span>
            </div>
            <span className="pill" style={{ fontSize: "0.72rem" }}>
              {currentSample.genre}
            </span>
          </div>

          {/* Manuscript Body + Editor Note */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "2rem",
              padding: "2.8rem 2.4rem",
              alignItems: "start",
            }}
            className="manuscript-grid"
          >
            {/* The Text Page */}
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.35rem",
                lineHeight: 1.85,
                color: "var(--char)",
                backgroundColor: "var(--paper)",
                padding: "2rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line)",
                minHeight: "180px",
              }}
              className="manuscript-page"
            >
              {viewMode === "before" && <span>{currentSample.raw}</span>}
              {viewMode === "tracked" && <span>{currentSample.tracked}</span>}
              {viewMode === "final" && <span>{currentSample.final}</span>}
            </div>

            {/* In-Line Editor Commentary Balloon */}
            <div
              style={{
                backgroundColor: "var(--note-background)",
                border: "1.5px solid var(--note-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.6rem",
                boxShadow: "0 8px 24px -10px rgba(180, 83, 9, 0.2)",
              }}
              className="manuscript-note"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--note-accent)",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.8rem",
                }}
                className="manuscript-note-heading"
              >
                <MessageSquare size={16} />
                <span>Editorial Margin Note</span>
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--note-foreground)",
                  lineHeight: 1.55,
                  marginBottom: "1rem",
                }}
                className="manuscript-note-copy"
              >
                &ldquo;{currentSample.comment.note}&rdquo;
              </p>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--note-meta)",
                  borderTop: "1px solid var(--note-border)",
                  paddingTop: "0.6rem",
                }}
                className="manuscript-note-author"
              >
                — {currentSample.comment.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .manuscript-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .demo-controls,
          .demo-genre-tabs,
          .demo-mode-tabs {
            min-width: 0;
            max-width: 100%;
          }
          .demo-genre-tabs,
          .demo-mode-tabs {
            flex-wrap: wrap;
            justify-content: center;
            border-radius: var(--radius-md) !important;
          }
          .demo-genre-tabs button,
          .demo-mode-tabs button {
            padding: 0.45rem 0.65rem !important;
          }
          .manuscript-grid {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
