/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#1E1E1E",
        primaryYellow: "#F1A501",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        DMSANS: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(-90deg, #D9D9D9, #F1A501)",
        "custom-yellow-gradient": "linear-gradient(#FFD883, #F1A501)",
      },
    },
  },
  plugins: [],
};
