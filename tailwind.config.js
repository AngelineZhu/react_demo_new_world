module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translatex(-20rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translatex(0)',
          },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 2s ease-out',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
