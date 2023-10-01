/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      gradientColorStops:{
        "linear":{
          'start' : '#259D87',
          'end' : '#11493F'
        }
      },
     
      colors:{
        greenLight : '#259d87',
        greenGradientStart : '#23937e',
        greenGradientEnd : '#10453b',
      }
    },
  },
  plugins: [],
}

