/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      advent: ['Advent Pro', 'sans-serif'],
      forum: ['Forum', 'serif']
    },
    extend: {
      colors: {
        'offwhite': '#fffefe',
        'bluegrey': '#b0c4c7',
        'lightbrown': '#7a6d5f',
        'midbrown': '#695a56',
        'darkbrown': '#4a433e',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

