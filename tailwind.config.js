const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "bubble-texture": 'url("/texture.svg")',
        "line-1": 'url("/assets/line1.svg")',
        "line-2": 'url("/assets/line2.svg")',
        "line-3": 'url("/assets/line3.svg")',
      },
      maxWidth: {
        "screen-2xl": "90rem", // 1440px
        "screen-xl": "84.375rem", // 1350px
      },
      fontFamily: {
        strawberry: ["Strawberry Blossom"],
      },
      fontSize: {
        "9xl": "7.5rem",
        "5xl": "47px",
        "2xl": "1.375rem", // 22px
      },
      objectPosition: {
        my: "-200% 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
