/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'theme': '#C5A47E',
        },
        brightness: {
            25: '.25',
            175: '1.75',
          },
        fontFamily: {
            'oswald': ['Oswald', 'sans-serif'],
            'mont': ['Montserrat', 'sans-serif'],
        },
      },
      backgroundImage: {
        'slide1': 'url("../public/slide1.jpg")',
        'hero': 'url("../public/03.jpg")',
        'slide2': 'url("../public/slide2.jpg")',
        'about': 'url("../public/about.jpg")',
        'portfolio': 'url("../public/portfolio.jpg")',
        },
        container: {
                padding: '12rem',
            },
        transitionDuration: {
            '0': '0ms',
            'zoom': '8000ms',
            }
        },
    plugins: [
        require('tailwind-scrollbar'),
    ],
  }