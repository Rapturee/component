/** @type {import('tailwindcss').Config} */
export default {
  variants: {
    extend: {
      display: ['responsive'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

