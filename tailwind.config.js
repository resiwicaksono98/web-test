/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5F2B8C',
        'primary-hover': '#4A2370',
        secondary: '#49B247',
        'gray-darken': '#656565',
        'gray-soft': '#BDBCBC'
      }
    }
  },
  plugins: []
}
