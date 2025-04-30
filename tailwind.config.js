/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontSize: {
        clamp: 'clamp(14px, 2vw, 16px)',
      },
    },
  },
  plugins: [],
};