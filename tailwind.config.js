/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ['Poppins', 'sans-serif'],
      colors:{
        primary: '#00ff00',
        text: '#ffffff',
        background: '#000000',
      }
    },
  },
  plugins: [],
}