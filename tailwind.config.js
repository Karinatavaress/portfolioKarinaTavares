/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}", // Linha extra de segurança
  ],
  theme: {
    extend: {
      colors: {
        'clean-bg': '#FAFAFA', 
        'accent-pink': '#f3dce2', 
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}