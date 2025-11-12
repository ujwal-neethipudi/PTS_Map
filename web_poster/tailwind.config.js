/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    extend: {
      colors: {
        primary: {
          light: "#f3e8ff",
          DEFAULT: "#a855f7",
          dark: "#7e22ce"
        }
      }
    }
  },
  plugins: []
};
