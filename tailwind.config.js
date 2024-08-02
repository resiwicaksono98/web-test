/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6CD99B',
        'primary-hover': '#5EC18A',
        'primary-dark': '#410D6E',
        'primary-medium': '#54467D',
        'primary-soft': '#9870C0',

        secondary: '#13383A',
        'gray-darken': '#656565',
        'gray-soft': '#B5B5B5',
        'gray-medium': '#585858',
        'gray-light': '#64748B'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
