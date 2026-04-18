"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark" || saved === "system") {
      setTheme(saved);
      updateTheme(saved);
    }
  }, []);

  function cycleTheme() {
    const next =
      theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    updateTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Change color theme. Current theme: ${theme}`}
      onClick={cycleTheme}
    >
      Theme: {theme}
    </button>
  );
}

function updateTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === "system") {
    root.removeAttribute("data-theme");
    return;
  }

  root.setAttribute("data-theme", theme);
}
