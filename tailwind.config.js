/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", ...fontFamily.sans],
        lora: ["var(--font-lora)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        dark: "#0d0d10",
        surface: "#16161c",
        elevated: "#1e1e28",
        light: "#faf7f2",
        "light-surface": "#f0ebe2",
        "light-elevated": "#e8e1d6",
        ink: "#1a1612",
        gold: "#e8b84b",
        "gold-dim": "#c49a20",
        "gold-light": "#b5820a",
        teal: "#4dd9ca",
        "teal-light": "#1a7a73",
        muted: "#7a7570",
        "muted-light": "#9a9590",
        border: "#2e2e3e",
        "border-light": "#d4ccc0",
        primary: "#e8b84b",
        primaryDark: "#4dd9ca",
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
