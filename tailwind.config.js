/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        color1: "hsl(227, 96%, 71%)",
        color2: "hsl(263, 58%, 63%)",
        color3: "hsl(262, 58%, 53%)",
        color4: "hsl(261, 69%, 45%)",
        color5: "hsl(262, 90%, 53%)",
      },
    },
  },
  plugins: [],
};
