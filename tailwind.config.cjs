const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.red,
          500: "#2EB9DC",
          600: "#0093B5",
          700: "#006F90",
          800: "#004D6C",
          900: "#002D4A",
        },
        secondary: {
          ...colors.red,
          100: "#dbfdeb",
          500: "#88F9BB",
          600: "#53C58B",
          700: "#11945D",
          800: "#0D6E45",
        },
      },
      fontFamily: {
        logo: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans],
        headline: ["IBM Plex Serif", ...defaultTheme.fontFamily.sans],
        body: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
}
