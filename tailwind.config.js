/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        heroSectionOrange: '#e99264',
        heroSectionTextColor: '#1e3932',
        contentBgColor: "#006241",
        contentImgBgColor: "#f1efeb",
        contentBgBlock: "#A5C4DC",
        gotoBgColor: '#1e3932'
      },
      fontFamily: {
        SoDoSans: ['SoDoSans', 'Helvetica Neue']
      }
    },
  },
  plugins: [],
}

