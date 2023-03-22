/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'indigo-1000': 'rgb(43,45,61)',
        'indigo-1100': 'rgb(37,39,52)'
        // 'primary-background': '#041F27'
      },
      height: {
        '100vw': '100vw'
      },
      fontFamily: {
        'days-one': ['var(--days-one)', fontFamily.sans],
        'varela-round': ['var(--varela-round)', fontFamily.sans]
      }
    }
  },
  plugins: []
}
