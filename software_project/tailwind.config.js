/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./src/**/**/*.{vue,js,ts,jsx,tsx}",
		"./src/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				pri: "#01715E",
				sec: "#15261E",
				ter: "#FFEACF",
				prilight: "#3EA392",
			},
			fontFamily: {
				pt: ["PT Sans Caption", "ui-sans-serif", "system-ui"],
				play: ["Play", "ui-sans-serif", "system-ui"],
			},
			fontSize: {
				"9xl": ["120px", "180px"],
				"2xl": ["24px", "36px"],
				"3xl": ["32px", "48px"],
				"4xl": ["48px", "72px"],
				xl: ["20px", "30px"],
			},
		},

	},
	plugins: [require("daisyui")],
});
