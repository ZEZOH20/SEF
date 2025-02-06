/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      width: {
        'fit-plus-2': 'calc(fit-content + 2px)',
      },
    },
  },
  plugins: [],
}