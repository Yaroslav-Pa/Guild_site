/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#729983",
        customBlack: "#151515",
        customWhite: "#F6F6F6",
        customGray: "#C7C7C7",
        goodsBlue: "#CFE1EF",
        goodsBrown: "#EDE0D1",
        goodsGreen: "#C3E1DC",
        goodsRed: "#F0D8DD",
        reportGreen: "#8DA681",
        contactsGreen: "#EBF3E6",
      },
      backgroundImage: {
        nightSkyBG: "url('/background.jpg')",
      },
      screens: {
        ssm: "426px",
        sm: "480px",
        md: "740px",
        mdp: "1000px",
        lg: "1200px",
        xl: "1460px",
        xxl: "1600px",
        xxxl: "1750px",
        HD: "1930px",
        twoK: "2050px",
        fourK: "3840px",
      },
    },
  },
  plugins: [],
  // safelist: [
  //   "left-[15px]",
  //   "left-[35px]",
  //   {
  //     pattern: /bg-(custom|goods)/,
  //     variants: ["hover"],
  //   },
  // ],
};
