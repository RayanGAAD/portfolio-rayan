"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" | "dark" | "terminal"

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = stored || (prefersDark ? "dark" : "light");
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    } catch {}
  }, []);

  function cycleTheme() {
    // Passage : light → dark → terminal → light
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "terminal" : "light";

    document.documentElement.classList.remove("light", "dark", "terminal");
    document.documentElement.classList.add(next);
    setTheme(next);
    localStorage.setItem("theme", next);
  }

  if (!mounted) return null;

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "☀️ Mode clair";
      case "dark":
        return "🌙 Mode sombre";
      case "terminal":
        return "💻 Mode cyber";
      default:
        return "Changer de thème";
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300
        ${
          theme === "terminal"
            ? "bg-black text-green-400 border border-green-500 hover:bg-green-950"
            : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        }`}
    >
      {getLabel()}
    </button>
  );
}
