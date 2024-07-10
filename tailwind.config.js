/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#00A5EC',
      primaryHover:'#008BDC', 
      white: '#FFFFFF',
      black:'#000000',
      gray: '#555',
      darkGray: '#444',
      lightGray: '#FAFAFA',
      lightBlue:'#eef6ff'
    },
  },
  plugins: [],
}