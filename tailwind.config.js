/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poller': '"Poller One", serif'
      },
      colors: {
        'base-color': '#eedb00',
        'grey-color': 'rgba(60, 69, 67, 0.6)',
        'red-color': 'rgba(204, 3, 35, 0.5)',
        'grey-border-color': '#ccc',
        'green-color': '#04AA6D',
        'green-hover-color': '#45a049',
        'grey-container-color': '#f2f2f2'
      },
      backgroundImage: {
        'sky': 'url(./assets/sky.jpg)'
      },
      boxShadow: {
        'hero': '10px 10px rgba(60, 69, 67, 0.6)'
      }
    },
  },
  plugins: [],
}