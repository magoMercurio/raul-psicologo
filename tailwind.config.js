/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "530px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "xll": "1400px",
        "2xl": "1536px",
      },
      fontFamily: {
        openSans: "Open Sans",
      },
    },
  },
  plugins: [],
}