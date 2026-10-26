/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0B0B0B',
          bone: '#E9E6DC',
          burgundy: '#481A20',
          charcoal: '#292929',
          red: '#C92127',
          olive: '#44452D',
          cream: '#F5F3EC',
          darkgray: '#181818',
          midgray: '#3A3A3A',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        editorial: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.25em',
        ultra: '0.35em',
      }
    },
  },
  plugins: [],
}
