/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A5EC',
        primaryHover:'#008BDC', 
        white: '#FFFFFF',
        black:'#000000',
        gray: '#555',
        darkGray: '#444',
        lightGray: '#FAFAFA',
        lightBlue:'#eef6ff',
        darkGolden:'#945e12',
        bgGolden:'#fff8c4',
        bgGolden2:'#fff8c400'
      },
    },
  },
  plugins: [],
}