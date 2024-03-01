/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(2,8,23,255)',
        'custom-light-blue':'rgba(59,130,246,.5)',
        'custom-light':'rgba(59,130,246,.5)',
      },
    },
  },
  variants: {},
  plugins: [],
}
