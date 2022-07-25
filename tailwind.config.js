/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pink-blue": "linear-gradient(to right, #DB5375 30% , #2F97C1 70%);",
      },
    },
  },
  plugins: [],
};
