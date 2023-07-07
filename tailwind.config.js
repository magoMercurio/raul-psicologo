/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customPrimary": "#3B82F6",
        "customSecondary": "#6CA1F8",
        "customLightBg1": "#BCD6FC",
        "customLightBg2": "#91BAFA",
        "customLightBg3": "#1F4688",
        "customLightBg3Hover": "#2E64C0",
        "customContentSubtitle": "rgb(178, 184, 205)",
        "customGrayBorder": "rgb(255,255,255,0.1)",
        "customGrayText": "rgb(174, 178, 183)",
        "customLightBgTransparent": "rgb(31, 32, 35, 0.7)",
        "customLightBgTransparentdarker": "rgb(0,0,0,0.5)",
        "customLightBgTransparentLighter": "rgb(48, 49, 54, 0.7)"
      },
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
        martianMono: "Martian Mono"
      },
    },
  },
  plugins: [require("daisyui")],
}