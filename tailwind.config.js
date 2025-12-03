/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': '#64041b',
        'pink': '#e8b4bc',
        'pink-soft': '#f0c8ce',
        'pink-bg': '#f2c4cb',
        'cream': '#f5efe6',
        'beige': '#faf5ef',
        'turquoise': '#2abfb3',
        'text-dark': '#6b2d3b',
        'text-light': '#faf5ef',
      },
      fontFamily: {
        'handwriting': ['Caveat', 'cursive'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

