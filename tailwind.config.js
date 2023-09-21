/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				showcase: "url('/src/Assets/showcase-image.svg')",
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwindcss-pseudo-selectors'),
	],
};
