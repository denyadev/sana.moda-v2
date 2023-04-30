/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'theme': '#394F76',
        },
        fontFamily: {
            'oswald': ['Oswald', 'sans-serif'],
            'mont': ['Montserrat', 'sans-serif'],
        },
      },
      backgroundImage: {
        'hero': 'url("../public/wall2.jpg")',
        },
        container: {
                padding: '12rem',
            },
        },
    plugins: [
        require('tailwind-scrollbar'),
    ],
  }