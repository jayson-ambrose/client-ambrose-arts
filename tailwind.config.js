/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      advent: ['Advent Pro', 'sans-serif']
    },
    extend: {
      colors: {
        'offwhite': '#fffefe',
        'bluegrey': '#b0c4c7',
        'lightbrown': '#7a6d5f',
        'midbrown': '#695a56',
        'darkbrown': '#4a433e',
      }
    },
  },
  plugins: [],
}

