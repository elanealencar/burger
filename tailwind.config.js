/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          bowlby: ["Bowlby One", "sans-serif"], 
        },
        colors: {
          lilasColor: "#B3A0CD",
        },
      },
    },
    plugins: [],
  };
  