import React from 'react';
import SkillCard from './SkillCard';

interface Skill {
	category: string;
	skills: string[];
}

interface SkillContainerProps {
	skills: Skill[];
}

const SkillContainer: React.FC<SkillContainerProps> = ({ skills }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
			{skills.map(skill => (
				<SkillCard key={skill.category} skill={skill} />
			))}
		</div>
	);
};

export default SkillContainer;
