/** @type {import('tailwindcss').Config} */
module.exports = {
	safelist: [{ pattern: /^bg-/ }],
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'hsl(var(--bg-primary))',
				'primary-dark': 'hsl(var(--bg-primary-dark))',
			},
			colors: {
				primary: 'hsl(var(--text-primary))',
				'primary-dark': 'hsl(var(--text-primary-dark))',
				secondary: 'hsl(var(--text-secondary))',
				'secondary-dark': 'hsl(var(--text-secondary-dark))',
				'border-primary': 'hsl(--border-primary)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
