/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      foreground: "#121212",
      suttle: "#999999",
    },
    borderWidth: {
      1: "0.05em",
    },
  },
  plugins: [],
};
