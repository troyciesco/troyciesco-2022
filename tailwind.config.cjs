const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

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
					900: "#002D4A"
				},
				secondary: {
					...colors.red,
					100: "#dbfdeb",
					500: "#88F9BB",
					600: "#53C58B",
					700: "#11945D",
					800: "#0D6E45"
				}
			},
			fontFamily: {
				logo: ["Abril Fatface", ...defaultTheme.fontFamily.sans],
				headline: ["Abril Fatface", ...defaultTheme.fontFamily.sans],
				body: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
				sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
				serif: ["Lora", ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")]
}
