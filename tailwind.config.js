/** @type {import('tailwindcss').Config} */


export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}', "./index.html"],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1281px',
      xl: '1536px'
    },
    extend: {
      screens: {
        'xs': '0px',
        'screen-470': '470px',
        'screen-760': '760px',
      },
      flexBasis: {},
      textColor: {},
      width: {},
      height: {},
      borderColor: {},
      minWidth: {},
      backgroundColor: {},
      opacity: {},
      
    }
  },
  plugins: [],
  important: true,
}

