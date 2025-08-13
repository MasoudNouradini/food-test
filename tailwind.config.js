/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace"
    },
    colors: {
      primary: "#FFFFF0",
      secondary: "#FEA405",
      background: "#DBE4C9",
      text: "#1F2937",
      border: "#E5E7EB",
      error: "#EF4444",
      success: "#10B981",
      warning: "#F59E0B",
      info: "#3B82F6",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        light: "#F3F4F6",
        DEFAULT: "#9CA3AF",
        dark: "#6B7280"
      },
      orange: {
        light: "#FFEDD5",
        DEFAULT: "#F97316",
        dark: "#fb8500"
      },
      red: {
        light: "#FEE2E2",
        DEFAULT: "#EF4444",
        dark: "#B91C1C"
      }
    },

    extend: {}
  },
  plugins: []
};
