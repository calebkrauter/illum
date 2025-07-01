import { nav } from "framer-motion/client";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        title: {
          light: "var(--x-light-gray)",
          dark: "var(--dark-gray)",
          testred: "var(--testred)",
        },
        subTitle: {
          light: "var(--subtitle)",
          background: "var(--sandstone)",
        },
        frost: {
          button: "var(--overlay-button)",
          overlay: "var(--overlay)",
          testred: "var(--testred)",
        },
        interaction: {
          active: "var(--interaction-active)",
          inactive: "var(--interaction-inactive)",
          nav: {
            inactive: "var(--nav-interaction-inactive)",
          },
        },
        card: {
          extraDark: "var(--x-dark-gray)",
          hover: "var(--popping-gray)",
          desc: "var(--desc)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
