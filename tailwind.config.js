/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'header-h': '60px',
        'product': 'calc(100% - 18rem)'
      },
      colors: {
        'redvu': '#ef4444 !important',
      }
    },
  },
  plugins: [],
}
