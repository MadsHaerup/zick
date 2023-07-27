import React from 'react';
import SkillContainer from '@/components/skills/SkillContainer';
import skills from '@/data/skill';
import Heading from '@/components/animations/Heading';

const page = () => {
	return (
		<>
			<main
				className="noise min-h-screen relative  text-primary dark:text-primary-dark grid justify-center"
				style={{ padding: 'clamp(1rem,5vw,4em)' }}
			>
				<div className="mb-8">
					<Heading title="Skills" tailwindsCSS="text-6xl" />
					<Heading title="and technologies" tailwindsCSS="text-4xl text-neutral-300" level={2} />
				</div>
				<SkillContainer skills={skills} />
			</main>
		</>
	);
};

export default page;
