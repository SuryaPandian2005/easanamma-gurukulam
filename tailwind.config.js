/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#C9A84C',
          600: '#b8953d',
          700: '#9a7a2e',
          800: '#7c6020',
          900: '#5e4810',
        },
        obsidian: '#0A0806',
        ember:    '#1a1208',
        incense:  '#12100E',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['"Jost"', 'sans-serif'],
        display:['"Cinzel Decorative"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)',
      },
    },
  },
  plugins: [],
}
