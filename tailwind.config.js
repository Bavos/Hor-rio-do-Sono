/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './frontend/**/*.{ts,tsx}', './remotion/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07100e',
        premium: '#12231f',
        mint: '#9be7c0'
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
