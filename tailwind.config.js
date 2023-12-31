/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    boxShadow: {
      blunt: '0px 2px 0px 0px rgba(2, 91, 75, 0.10)',
      calendar: '0px 4px 24px 0px rgba(0, 0, 0, 0.12)',
      card: '0px 2px 0px 1px rgba(5, 9, 13, 0.06)',
    },
    colors: {
      avocado: {
        200: '#ECF1E0',
        300: '#E0E9CB',
      },
      green: {
        500: '#025B4B',
        '500-hover': 'rgba(2, 91, 75, 0.8)',
      },
      ivy: {
        300: '#B3CEC9',
      },
      marigold: {
        200: '#FAE7CC',
        500: '#E68A00',
        600: '#BB9A6A',
      },
      neutral: {
        '000': '#FFFFFF',
        100: '#F5F7F7',
        300: '#E7EAEB',
        400: '#D4D8D9',
        500: '#A7AAAB',
        600: '#737680',
        900: '#05090D',
      },
      ocean: {
        200: '#DEE8F6',
        500: '#2464C6',
      },
    },
    fontFamily: {
      serif: ['Lora', 'serif'],
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
