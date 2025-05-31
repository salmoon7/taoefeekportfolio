/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#14b8a6",
        accent2: "#6366f1",
        lightgray: "#f9fafb",
        darkgray: "#1f2937",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
