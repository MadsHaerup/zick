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
				'primary-border': 'hsl(var(--border-primary))',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'primary-dark-gradient':
					'linear-gradient(45deg, var(--colors-gray2), var(--colors-gray3), var(--colors-gray2), var(--colors-gray3))',
				'primary-gradient':
					'linear-gradient(45deg, var(--colors-lightGray2), var(--colors-lightGray5), var(--colors-lightGray2), var(--colors-lightGray5) )',
			},
			keyframes: {
				menu: {
					'0%': { opacity: 0, transform: 'translate(-50%, -50%) translateY(80px)' },
					'100%': { opacity: 1, transform: 'translate(-50%, -50%) translateY(0px)' },
				},
				rotating: {
					'0%': { transform: 'rotate(40deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
			},
			animation: {
				menu: 'menu 500ms ease 200ms 1 normal forwards running',
				rotating: 'rotating 1s forwards',
			},
		},
	},
	plugins: [],
};
