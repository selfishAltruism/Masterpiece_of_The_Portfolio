/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4338CA",
        sub: "#0f0093",
        dark: "#1c1c1c",
        light: "#ffffff",
      },
      fontFamily: {
        sans: ["S-CoreDream-3Light", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
