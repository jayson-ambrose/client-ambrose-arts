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
        'offwhite': '#F6F9E8',
        'bluegrey': '#B1C0AA',
        'light': '#5194A1',
        'mid': '#1B476C',
        'dark': '#1E3A5D',
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

