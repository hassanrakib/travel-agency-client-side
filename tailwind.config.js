module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'carousel-img-1': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/1200x600')",
        'carousel-img-2': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/1200x602')",
        'why-us': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/1200x602')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
