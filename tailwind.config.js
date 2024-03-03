/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      advent: ['Advent Pro', 'sans-serif'],
      forum: ['Forum', 'serif'],
      philosopher: ['Philosopher', 'serif']
    },
    extend: {
      colors: {
        'offwhite': '#EBF0EA',
        'bluegrey': '#B6DADD',
        'light': '#53ACBF',
        'mid': '#296883',
        'dark': '#09324F',
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

