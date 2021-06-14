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
        faded: {
          light: '#F8F8F880'
        },
        link: {
          dark: '#FFB84F'
        },
        highlight: {
          dark: '#08DC90'
        },
        scrollbar: {
          dark: '#08DC90'
        },
        selection: {
          dark: '#ad8d32'
        }
      },
      fontFamily: {
        'averia-serif': ['"Averia Serif Libre"', 'cursive'],
        'averia-sans': ['"Averia Sans Libre"', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      maxWidth: {
        'home-column': '350px'
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
