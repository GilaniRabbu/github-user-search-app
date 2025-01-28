import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#141D2F",
          800: "#1E2A47",
          500: "#0079FF",
        },
        gray: {
          800: "#2B3442",
          600: "#4B6A9B",
          400: "#697C9A",
          100: "#F6F8FF",
        },
      },
      boxShadow: {
        custom: "0 16px 30px -10px rgba(70, 96, 187, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
