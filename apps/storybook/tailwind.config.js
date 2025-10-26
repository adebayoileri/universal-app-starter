/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#storybook-root",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
