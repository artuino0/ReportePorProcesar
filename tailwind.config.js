/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#eff3fc",
        "white": "#fff",
        "data": "#f7f9fc",
        "disabledText": "#a6aab2",
        "ligth-gray": "#eaeff4"
      }
    },
  },
  plugins: [],
};
