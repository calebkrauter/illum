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
          light: "var(--title-light)",
          dark: "var(--title-dark)",
          testred: "var(--testred)",
        },
        bg: {
          light: "var(--title-light)",
          dark: "var(--title-dark)",
          testred: "var(--testred)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
