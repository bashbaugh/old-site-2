module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#31363E'
        },
        text: {
          light: '#F8F8F8'
        },
        accent: {
          dark: '#623434'
        },
        border: {
          dark: '#22272E'
        },
        'text-faded': {
          light: '#F8F8F880'
        },
        link: {
          dark: '#FFB84F'
        },
        highlight: {
          dark: '#08DC90'
        }
      },
      fontFamily: {
        'averia-sans': ['"Averia Sans Libre"', 'cursive'],
        'averia-serif': ['"Averia Serif Libre"', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      maxWidth: {
        'home-column': '400px'
      },
      spacing: {
        'section': '1.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
