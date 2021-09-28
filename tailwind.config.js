const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        test: "0px 5px 6px 0px rgba(0,0,0,0.2)",
      },
      borderWidth: {
        6: "6px",
      },
      backgroundImage: {
        "bubble-texture": 'url("/texture.svg")',
        "subfooter-line": 'url("/subfooter-arrow.svg")',
        "subfooter-line-mobile": 'url("/subfooter-arrow-mobile.svg")',
        "why-work-with-us-pattern":
          "url('/why-work-with-us-texture.png'), linear-gradient(90deg, #42BEAD 0.01%, #3195AC 43.79%, #2364A4 100.04%)",
        "line-1": 'url("/assets/line1.svg")',
        "line-2": 'url("/assets/line2.svg")',
        "line-3": 'url("/assets/line3.svg")',
        "line-1-mobile": 'url("/assets/line1-mobile.svg")',
        "line-2-mobile": 'url("/assets/line2-mobile.svg")',
        "line-3-mobile": 'url("/assets/line3-mobile.svg")',
      },
      maxWidth: {
        "screen-2xl": "90rem", // 1440px
        "screen-xl": "84.375rem", // 1350px
      },
      fontFamily: {
        strawberry: ["Strawberry Blossom", "Brush Script MT", "cursive"],
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
