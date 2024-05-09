/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple-100': '#F6EAF3',
        'custom-purple-200': '#fad4f1',
        'custom-purple-400': '#ff91e4',
        'custom-blue-100': '#C6D4EB',
        'custom-blue-200': '#9ebdf0',
        'custom-blue-400': '#4d90ff',
        'fyle-red':'#FF3366',
        'fyle-subhead': "#737987"
      }
    },
  },
  plugins: [],
}

