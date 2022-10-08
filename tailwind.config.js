module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontSize: {
        xs: ['10px', '14px'],
        sm: ['14px', '20px'],
      },

      extend: {
        colors: {
          "black": "#000000",
          "lightgrey": "#EAEAEA",
          "darkgrey": "#5C5C5C",
          "white": "#FFFFFF",
          "blue-400":"#1C3797",
          "blue-300":"#5BBAFF",
          "blue-200":"#ABDCFF",
          "blue-100":"#E0EEFF"
        }
      },

      fontFamily: {
        "nunito": ["Nunito"]
      }
    },
    plugins: [],
  }