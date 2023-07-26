'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface Skill {
	category: string;
	skills: string[];
}

interface SkillCardProps {
	skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
	const { category, skills } = skill;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, rotateZ: 0 }}
			animate={{ opacity: 1, scale: 1, rotateZ: 10 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.5 }}
			className="p-8 rounded-xl bg-white dark:bg-[rgba(53,53,53,.5)] bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg max-w-md"
		>
			<h2 className="text-lg mb-4 dark:text-neutral-400 text-neutral-300">{category}</h2>
			<ul className=" list-none text-secondary dark:text-primary-dark font-medium grid grid-rows-5 grid-flow-col gap-2">
				{skills.map(skill => (
					<li className="whitespace-nowrap text-ellipsis overflow-hidden" key={skill}>
						{skill}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default SkillCard;
