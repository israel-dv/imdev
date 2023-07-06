/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'indigo-1000': 'rgb(43,45,61)',
        'indigo-1100': 'rgb(37,39,52)',
        'black-16': 'rgb(16,16,16)'
        // 'primary-background': '#041F27'
      },
      height: {
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '95vw': '95vw',
        '100vw': '100vw'
      },
      maxWidth: {
        '75ch': '75ch'
      },
      fontFamily: {
        'lilita-one': ['var(--lilita-one)', fontFamily.sans],
        'outfit-black': ['var(--outfit-black)', fontFamily.sans],
        outfit: ['var(--outfit)', fontFamily.sans]
      },
      screens: {
        phone: '367px'
      }
    }
  },
  plugins: []
}
