/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#F7C353',
        'primary-light': '#FAD882',
        black: '#0E0A01',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
