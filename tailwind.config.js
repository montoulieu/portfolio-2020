const colors = require('./node_modules/tailwindcss/colors');

module.exports = {
  purge: {
    options:{
      safelist: [/^hover:bg-/,/^bg-/, /^text-/]
    },
    content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
}
