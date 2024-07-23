/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5F2B8C',
        'primary-hover': '#4A2370',
        'primary-dark': '#410D6E',
        'primary-medium': '#54467D',
        'primary-soft': '#9870C0',

        secondary: '#49B247',
        'gray-darken': '#656565',
        'gray-soft': '#BDBCBC',
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
