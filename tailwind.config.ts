// DO NOT REMOVE content PATHS - Tailwind needs these to generate classes.
// Adding new component directories? Add them to content array.

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  /* Keep critical layout/theme classes even if not detected (prevents breakage) */
  safelist: [
    "min-h-screen",
    "bg-white",
    "text-primary",
    "overflow-x-hidden",
    "font-sans",
    "antialiased",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#274a82",
        accent: "#89d1c5",
        "accent-light": "#a5ddd4",
        "primary-muted": "#5771a2",
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
      },
      accentColor: {
        DEFAULT: "#89d1c5",
        primary: "#274a82",
      },
      fontFamily: {
        sans: ["Century Gothic", "Apple Gothic", "Futura", "Helvetica Neue", "sans-serif"],
        serif: ["Century Gothic", "Apple Gothic", "Futura", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(39, 74, 130, 0.08), 0 2px 4px -2px rgba(39, 74, 130, 0.06)",
        "soft-lg": "0 10px 15px -3px rgba(39, 74, 130, 0.08), 0 4px 6px -4px rgba(39, 74, 130, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
