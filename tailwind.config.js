/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'mono': ['"Share Tech Mono"', 'monospace']
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

