/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fbf6f1",
          100: "#f3e6d8",
          200: "#e6cbb0",
          500: "#a8683a",
          600: "#8c522b",
          700: "#6f4024",
          900: "#3a2216",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
