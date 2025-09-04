/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        skyblue: '#7EC8E3',
        babypink: '#FFC4D6',
        lilac: '#C3B1E1',
        sunshine: '#FFD54F',
        coolgray: '#9CA3AF'
      },
      boxShadow: {
        smooth: '0 10px 25px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
