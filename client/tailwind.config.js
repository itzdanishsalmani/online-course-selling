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
        'custom-blue-nav': 'rgba(2,8,23,0.95)',
        'custom-light-blue':'rgba(59,130,246,.5)',
        'custom-light':'rgba(163,163,163,255)',
        'custom-bg':'rgba(226,232,240,255)',
        'custom-border-color':'rgba(70,84,104,255)',
      },
    },
  },
  variants: {},
  plugins: [],
}
