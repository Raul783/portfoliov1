"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  console.log("🔥 THEME TOGGLE LOADED");

  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
        document.body.setAttribute("data-theme", storedTheme);
      } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    } catch (e) {
      console.error("Theme error:", e);
    } finally {
      setMounted(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
    </button>
  );
}
