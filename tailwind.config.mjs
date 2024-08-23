/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#5a2673',
				'secondary': '#ffaa00'
			},
			fontFamily: {
				'Bahnschrift': 'Bahnschrift',
				'Montserrat': 'Montserrat'
			},
			animation: {
				fade: 'fadeIn .5s ease-in-out',
				fadeOut: 'fadeOut .5s ease-in-out',
			  },
			  keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
}
