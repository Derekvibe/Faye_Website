"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const themeChangeEvent = "favour-theme-change";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(themeChangeEvent, onChange);
  return () => window.removeEventListener(themeChangeEvent, onChange);
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  if (themeColor) {
    themeColor.content = theme === "dark" ? "#141311" : "#F7F3EB";
  }

  try {
    window.localStorage.setItem("favour-theme", theme);
  } catch (error) {
    console.error("Unable to save the selected color theme.", error);
  }

  window.dispatchEvent(new Event(themeChangeEvent));
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => "light");
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{
        display: "grid",
        placeItems: "center",
        width: "40px",
        height: "40px",
        flexShrink: 0,
        border: "1px solid var(--line-strong)",
        borderRadius: "50%",
        background: "var(--paper)",
        color: "var(--char)",
        cursor: "pointer",
        transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
      }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
