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
    },
  },
  plugins: [],
}
