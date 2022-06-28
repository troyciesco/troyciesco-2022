const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				primary: colors.gray,
				// primary: {
				// 	50: "#E7F9F5",
				// 	100: "#CCF0E8",
				// 	200: "#7BD7C5",
				// 	300: "#43C6AD",
				// 	400: "#32A48E",
				// 	500: "#00509d",
				// 	600: "#1F6759",
				// 	700: "#035453",
				// 	800: "#123F36",
				// 	900: "#012F34",
				// 	lightest: "#012F34",
				// 	lighter: "#012F34",
				// 	light: "#012F34",
				// 	base: "#012F34",
				// 	dark: "#014E56",
				// 	darker: "#012F34",
				// 	darkest: "#012F34"
				// },
				secondary: {
					lightest: "#012F34",
					lighter: "#012F34",
					light: "#012F34",
					base: "#F67E7E",
					dark: "#012F34",
					darker: "#012F34",
					darkest: "#012F34"
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
