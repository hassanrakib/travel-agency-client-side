module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'carousel-img-1': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/1200x600')",
        'carousel-img-2': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/1200x602')",
        'why-us': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/1200x602')",
        'sign-in': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/random/800x602')",
        'place-order': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/g30P1zcOzXo')",
        'add-package': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/NRQV-hBF10M')",
        'my-bookings': "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://source.unsplash.com/4QWR5geRC9I')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
