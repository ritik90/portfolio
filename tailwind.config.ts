import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        foreground: "#E5E7EB",
        violet: "#7C3AED",
        cyan: "#06B6D4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(124, 58, 237, 0.28)",
        cyanGlow: "0 0 50px rgba(6, 182, 212, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;