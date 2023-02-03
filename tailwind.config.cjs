/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lac: {
          blue: {
            light: "#DDF0F1",
            dark: "#002447",
          },
          gray: "#9597AC",
        },
      },
    },
  },
  plugins: [],
}