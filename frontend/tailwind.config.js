/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      mym: '820px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {},
  },
  plugins: [],
}
