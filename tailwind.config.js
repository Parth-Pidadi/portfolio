/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-display)", ...fontFamily.sans],
        lora: ["var(--font-body)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        dark: "#07070e",
        surface: "#0d0d1a",
        elevated: "#141428",
        light: "#faf8f5",
        "light-surface": "#f0ebe0",
        "light-elevated": "#e5ddd0",
        ink: "#1a1618",
        // crimson accent (was gold)
        gold: "#e63946",
        "gold-dim": "#c22835",
        "gold-light": "#9e1f2c",
        // periwinkle secondary (was teal)
        teal: "#8ba9f8",
        "teal-light": "#4d6ee8",
        muted: "#5c5a70",
        "muted-light": "#8a8898",
        border: "#1c1c2e",
        "border-light": "#ddd5c8",
        primary: "#e63946",
        primaryDark: "#8ba9f8",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
