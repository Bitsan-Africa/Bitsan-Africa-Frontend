/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#1E1E1E",
        primaryYellow: "#F1A501",
      },
      fontFamily:{
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
