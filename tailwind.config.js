/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': '#12c4a2',
      }
    },
  },
  plugins: [],
};
