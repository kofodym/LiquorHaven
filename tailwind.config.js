/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens:{
      'sm': '375px',
      'md': '744px',
      'lg': '1728',
    },
    extend: {},
  },
  plugins: [],
};

