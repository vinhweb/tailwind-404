module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        '92': '23rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}