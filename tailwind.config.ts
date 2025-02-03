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
      },
    },
  },
  plugins: [],
} satisfies Config;
