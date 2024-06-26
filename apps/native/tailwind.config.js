/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.js",
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

