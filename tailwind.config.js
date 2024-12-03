/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    colors: {
      orange : '#FF5A5F',
      black : '#000000',
      babu: '#00A699',
      white: '#FFFFFF',
      lightBabu: '#b6f8f3',
      lightWhite: '#f2f2f2',
      lightBlack: '#333333',
      gray200: '#E5E7EB',
    },
    screens : {
      sm : '640px',
      md : '768px',
      lg : '1024px',
      xl : '1280px'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}