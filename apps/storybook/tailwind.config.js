/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/*.stories.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/app/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#storybook-root",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
