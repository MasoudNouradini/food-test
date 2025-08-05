/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace"
    },
    colors: {
      primary: "#FBBF24",
      secondary: "#F59E0B",
      background: "#FFF9E9",
      text: "#1F2937",
      border: "#E5E7EB",
      error: "#EF4444"
    },

    extend: {}
  },
  plugins: []
};
