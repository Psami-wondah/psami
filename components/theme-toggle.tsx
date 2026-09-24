"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <button type="button" className="theme-toggle" aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}><span aria-hidden="true">{mounted && resolvedTheme === "dark" ? "☀" : "◐"}</span></button>;
}
