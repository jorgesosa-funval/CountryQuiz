/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        'vietnam': "'Be Vietnam Pro', sans-serif"
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('/bg.jpg')",
        'button-gradient': "linear-gradient(#E65895, #BC6BE8)"
      },
      colors:{
        'buttons-bg':'#393F6E',
        'text-bg':'#E2E4F3',
        'primary-bg':'#343964',
        'blue-bg':'#3E9FFF',
        'red-bg':'#DD524C',
        'gray-bg':'#8B8EAB',
        'yellow-bg':'#FFECC8'

      },
      
    },
  },
  plugins: [],
}