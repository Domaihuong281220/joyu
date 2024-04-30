/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#44614F",
        secondary1: "#1E1B1A",
        secondary2: "#9623F0",
        secondary3: "#00FFFF",
      },
      borderColor: {
        secondary1: "#4fb645",
      },
      textColor: {
        secondary1: "#4fb645",

        secondary2: "#9623F0",
      },

      fontFamily: {
        nexa_bold: ["svn-nexa-bold"],
        nexa_light: ["svn-nexa-light"],
        nexa: ["svn-nexa"],
        shopee_bold: ["shopee-bold"],
        shopee_regular: ["shopee-regular"],
        shopee_medium: ["shopee-medium"],
        shopee_light: ["shopee-light"],
        jonitha: ["jonitha-script"],
        chalkboard: ["chalkboard"],
        svn_rust: ["svn-rust"],
      },
      screens: {
        pv: "280px",
        pvmax: "360px",
        ph: "480px",
        laptop: "1300px",
        dv: "1440px",

        dh_max: "1920px",

        dh: "5000px",
      },
    },
  },
  plugins: [],
}