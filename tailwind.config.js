/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./app/modules/**/*.php",
		"./app/layout/*.php",
		"./app/modules/!panel/**",
		"./app/public/js/*.js",
	],

	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			"dark-black": "#0E110E",
			black: "#353030",
			"gray-100": "#E4E4E4",
			"gray-200": "#C4C5C7",
			"gray-300": "#9FA0A2",
			ivory: "#F7F7F7",
			cocoa: "#5E5448",
			orange: "#F5A623",
			primary: "#A16026",
			bronze: "#BD9468",
			red: "#DC534F",
			"black-cow": "#504949",
			dust: "#BC9468",
		},

		fontFamily: {
			sans: ["Rubik", ...defaultTheme.fontFamily.sans],
			serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
		},

		fontSize: {
			// Icon 18px
			"icon-18": [
				"1.125rem",
				{
					lineHeight: "1",
				},
			],
			// Icon 24px
			"icon-24": [
				"1.5rem",
				{
					lineHeight: "1",
				},
			],
			// Icon 40px
			"icon-40": [
				"2.5rem",
				{
					lineHeight: "1",
				},
			],
			// Caption text
			xs: [
				"0.75rem",
				{
					lineHeight: "1rem",
					fontWeight: "500",
				},
			],
			// Body text
			base: [
				"0.875rem",
				{
					lineHeight: "1.6",
					fontWeight: "400",
				},
			],
			// Swiper buttons mobile
			md: [
				"1rem",
				{
					lineHeight: "1.2",
					fontWeight: "500",
				},
			],
			// Subtitle 2
			lg: [
				"1.125rem",
				{
					lineHeight: "1.6",
					fontWeight: "400",
				},
			],
			// Subtitle 1
			xl: [
				"1.375rem",
				{
					lineHeight: "1.6",
					fontWeight: "400",
				},
			],
			// H5
			"2xl": [
				"1.5rem",
				{
					lineHeight: "1.4",
					fontWeight: "500",
				},
			],
			// H4
			"3xl": [
				"2.25rem",
				{
					lineHeight: "1",
					fontWeight: "700",
				},
			],
			// H3
			"4xl": [
				"2.5rem",
				{
					lineHeight: "1",
					fontWeight: "600",
				},
			],
			// H2
			"5xl": [
				"3rem",
				{
					lineHeight: "1",
					fontWeight: "600",
				},
			],
			// H1
			"6xl": [
				"4rem",
				{
					lineHeight: "1",
					fontWeight: "600",
				},
			],
			// H1
			"7xl": [
				"5rem",
				{
					lineHeight: "1",
					fontWeight: "600",
				},
			],
		},

		extend: {
			container: {
				center: true,
			},

			transitionDuration: {
				DEFAULT: "250ms",
			},

			scale: {
				115: "1.15",
				195: "1.95",
			},

			height: {
				fill: "-webkit-fill-available",
			},

			boxShadow: {
				gallery: "0 4px 5px #383232",
			},

			spacing: {
				full: "100%",
				112: "28rem",
				128: "32rem",
				18: "4.5rem",
				15: "3.75rem",
			},

			lineHeight: {
				1.6: "1.6",
				1.28: "1.28",
			},

			typography: {
				DEFAULT: {
					css: {
						color: "#fff",
						fontWeight: 400,

						p: {
							lineHeight: 1.4,
						},
					},
				},
			},
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("tailwind-scrollbar")({ nocompatible: true }),

		plugin(function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("allChild", "& *");
			addVariant("child-hover", "& > *:hover");
		}),
	],
};
