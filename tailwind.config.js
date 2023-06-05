/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        yellow: "#FFF171",
        pink: "#F677C8",
        green: "#67EF4D",
        light: "#292936",
        dark: "#23232D",
      },
    },
  },
  plugins: [],
};
