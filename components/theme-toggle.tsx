"use client";

import { useTheme } from "next-themes";
import { useMemo, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const resolvedTheme = useMemo(() => {
    if (theme === "system") {
      return systemTheme || "dark";
    }
    return theme || "dark";
  }, [systemTheme, theme]);

  const icon =
    resolvedTheme === "dark" ? "dark_mode" : "light_mode";

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        aria-label="Toggle theme"
        className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center text-slate-600 dark:text-slate-400"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span
          className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {icon}
        </span>
      </button>
      <div
        className={`absolute right-0 mt-2 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden py-1 z-50 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {[
          { key: "light", label: "Light", icon: "light_mode" },
          { key: "dark", label: "Dark", icon: "dark_mode" },
          { key: "system", label: "System", icon: "desktop_windows" },
        ].map((item) => (
          <button
            key={item.key}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
              theme === item.key
                ? "text-primary bg-primary/10"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
            onClick={() => {
              setTheme(item.key);
              setOpen(false);
            }}
            type="button"
          >
            <span className="material-symbols-outlined text-lg">
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
