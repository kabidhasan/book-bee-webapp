/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			pri: "#01715E",
			sec: "#15261E",
			ter: "#FFEACF",
		},
		fontFamily: {
			pt: ["PT Sans Caption", "ui-sans-serif", "system-ui"],
			play: ["Play", "ui-sans-serif", "system-ui"],
		},
		fontSize: {
			"9xl": ["120px", "180px"],
			"2xl": ["24px", "36px"],
		},
	},
	plugins: [require("daisyui")],
});
