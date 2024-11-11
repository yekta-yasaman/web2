/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    extend: {
      screens:{
        "mobile":"340px",
        "desktop":"1000px"
      },
      width:{
        "d1":"700px"
      },
      colors:{
        "red1":"#ff0000",
        "p5":"#7C7D7E",
        "p6":"#94979a",
        "b6":"#dadada",
        "dark":"#333232"
      
      },
      boxShadow: {
        'lg': '0 0 5px 5px lightgray',
       'shad':'-3px 3px 7px 0 rgba(0, 0, 0, 0.2)'
      },
    },

  },
}

