/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Noto Sans", "sans-serif"],
      },
      colors: {
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        strong: "rgb(var(--text-strong) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
