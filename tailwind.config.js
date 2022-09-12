/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#FCDCDC",
        black: "#312A37",
        pink: "#F64E70",
        greenEasy: "#058F89",
        orangeMedium: "#F8831C",
        pinkHard: "#F45980",
        semigrey: "rgb(var(--color-semigrey) / 0.1)",
        grey: "rgb(var(--color-semigrey) / 0.6)",
      },
      dropShadow: {
        white: "4px 5px 0px rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
