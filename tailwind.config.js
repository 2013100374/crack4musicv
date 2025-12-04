/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'neon-red': '#ff073a',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
}
