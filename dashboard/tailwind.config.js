/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'alice-blue': '#f0f8ff',
          'dark-blue': '#081A51',
        },
      }
    },
  },
  plugins: [],
}