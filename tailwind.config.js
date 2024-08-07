/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        lucida: ['Lucida Sans', 'sans-serif'],
      },
      colors: {
        primary: '#003459',
      },
    },
  },
  plugins: [],
}
