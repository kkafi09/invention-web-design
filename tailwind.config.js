/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#FCDCDC",
        black: "#312A37",
        pink: "#F64E70",
      },
      dropShadow: {
        white: "4px 5px 0px rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
