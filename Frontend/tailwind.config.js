/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Golos: ["Golos Text", "sans-serif"],
      },
      backgroundImage: {
        car: "url('/car.webp')",
      },
    },
    plugins: [],
  },
};
