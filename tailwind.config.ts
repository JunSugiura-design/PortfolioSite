import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sakura: {
          50: "#fef4f4",
          100: "#fde8e8",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f59e9e",
          500: "#f27474",
          600: "#e65c5c",
          700: "#d94545",
          800: "#cc2e2e",
          900: "#b91c1c",
        },
        ai: {
          50: "#f0f7fb",
          100: "#e1eff6",
          200: "#b8d9ea",
          300: "#8fc3de",
          400: "#66add2",
          500: "#3d97c6",
          600: "#165e83",
          700: "#134e6d",
          800: "#0f3e57",
          900: "#0c2e41",
        },
      },
      fontFamily: {
        japanese: ["Noto Serif JP", "serif"],
        "jp-gothic": ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
