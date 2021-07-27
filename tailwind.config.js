module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        poison: '#A59',
        grass: '#7c5',
        water: '#39f',
        fire: '#f42',
        electric: '#fc3'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
