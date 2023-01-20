/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        icon_Bg: 'rgba(115, 103, 240, 0.08)',
        primary: '#4078BC',
        secondary: '#6f6b7d',
        lightBlue: '#e8eff7',
        statText: '#5d596c',
      },
    },
  },
  plugins: [],
};
