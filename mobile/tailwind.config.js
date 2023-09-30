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
      backgroundImage: {       
        "linear-transparent":
          "linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
      },
      colors:{
        greenLight : '#259d87'
      }
    },
  },
  plugins: [],
}

