"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const options = [
  { key: "light", label: "Light", symbol: "☼" },
  { key: "dark", label: "Dark", symbol: "◐" },
  { key: "system", label: "System", symbol: "◫" },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="icon-button font-mono"
        aria-label="Choose colour theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true">{mounted && resolvedTheme === "light" ? "☼" : "◐"}</span>
      </button>
      <div className={`theme-menu ${open ? "is-open" : ""}`} role="menu" aria-label="Colour theme">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            role="menuitemradio"
            aria-checked={mounted && theme === option.key}
            className={`theme-option ${mounted && theme === option.key ? "is-active" : ""}`}
            onClick={() => {
              setTheme(option.key);
              setOpen(false);
            }}
          >
            <span aria-hidden="true">{option.symbol}</span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
