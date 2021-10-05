const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        test: "0px 5px 6px 0px rgba(0,0,0,0.2)",
        fly: "0 10px 20px -8px rgba(0, 0, 0,.7)",
      },
      borderWidth: {
        6: "6px",
      },
      backgroundImage: {
        "bubble-texture": 'url("/texture.svg")',
        "subfooter-line": 'url("/subfooter-arrow.svg")',
        "subfooter-line-mobile": 'url("/subfooter-arrow-mobile.svg")',
        form: 'url("/assets/form/bg.svg")',
        "meet-rodrigo-pattern":
          "url('/assets/landing-page/meet-rodrigo-texture.png'), linear-gradient(90deg, #42BEAD 0.01%, #3195AC 43.79%, #2364A4 100.04%)",
        "line-1": 'url("/assets/landing-page/line1.svg")',
        "line-2": 'url("/assets/landing-page/line2.svg")',
        "line-3": 'url("/assets/landing-page/line3.svg")',
        "line-1-mobile": 'url("/assets/landing-page/line1-mobile.svg")',
        "line-2-mobile": 'url("/assets/landing-page/line2-mobile.svg")',
        "line-3-mobile": 'url("/assets/landing-page/line3-mobile.svg")',
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
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-5%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "100" },
        },
        "slide-in-nav": {
          "0%": {
            transform: "translateY(-64px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slide: "slide .5s ease-in-out",
        "slide-in-nav": "slide-in-nav .5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
