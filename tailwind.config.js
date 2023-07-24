/** @type {import('tailwindcss').Config} */
module.exports = {
	safelist: [{ pattern: /^bg-/ }, { pattern: /^w-/ }, { pattern: /^h-/ }, { pattern: /^h/ }, { pattern: /^px-/ }],
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
				scaleIn: {
					'0%': {
						transform: 'scale(0)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
				linearLine: {
					'0%': {
						background: 'transparent',
					},

					'50%': {
						background: 'white',
					},

					'100%': {
						width: '100%',
						background: 'white',
					},
				},
				downtoup: {
					'0%': { transform: 'translateY(-100%), opacity: 0' },
					'50%': { transform: 'translateY(0%), opacity: 1' },
					'100%': { transform: 'translateY(100%), opacity: 0' },
				},
			},
			animation: {
				menu: 'menu 500ms ease 200ms 1 normal forwards running',
				rotating: 'rotating 1s forwards',
				scaleIn: 'scaleIn 1000ms ease normal forwards running',
				linearLine: 'linearLine 1s ease forwards',
				downtoup: 'downtoup 1s ease forwards',
			},
		},
	},
	plugins: [],
};
