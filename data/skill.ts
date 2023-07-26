interface Skill {
	category: string;
	skills: string[];
}

const skills: Skill[] = [
	{
		category: 'Languages',
		skills: ['HTML', 'Javascript', 'Typescript', 'Python', 'PineScript'],
	},
	{
		category: 'Front-end',
		skills: [
			'React',
			'Next',
			'React Native',
			'Tauri',
			'Tailwind',
			'CSS',
			'SCCS',
			'Jest',
			'React-testing',
			'GraphQL',
			'StoryBook',
			'REST',
		],
	},
	{
		category: 'Back-end',
		skills: ['Node', 'MongoDB', 'Express', 'Flask'],
	},
	{
		category: 'Design',
		skills: ['Figma', 'Vectr', 'Adobe Express'],
	},
	{
		category: 'Tools',
		skills: ['Github CI/CD', 'Git', 'yarn', 'npm', 'VsCode'],
	},
	{
		category: 'Platforms',
		skills: ['Vercel', 'Netlify', 'Shopify', 'OpenAI', 'Sanity'],
	},
];

export default skills;
