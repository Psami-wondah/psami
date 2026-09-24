/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { fontFamily: { sans: ["var(--font-sans)", "Arial", "sans-serif"] }, colors: { accent: "rgb(var(--accent) / <alpha-value>)", canvas: "rgb(var(--canvas) / <alpha-value>)", surface: "rgb(var(--surface) / <alpha-value>)", strong: "rgb(var(--text-strong) / <alpha-value>)", muted: "rgb(var(--text-muted) / <alpha-value>)", line: "rgb(var(--line) / <alpha-value>)" } } },
  plugins: [],
};
