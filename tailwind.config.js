/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('/src/assets/more/13.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

