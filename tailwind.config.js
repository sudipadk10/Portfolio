/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'less': '0px', 
      'mobile': '200px',
      'tablet': '500px',
      'mini-top': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {

    },
  },
  plugins: [],
}