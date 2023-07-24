import React, { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import TextAnimation from '../animations/TextAnimation';
import CrypticContainer from '../cryptic/CrypticContainer';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

type Project = {
	title: string;
	link: string;
	date: string;
	description: string;
};

const ProjectList: React.FC = () => {
	const [projectList, setProjectList] = useState<Project[] | null>(null);

	useEffect(() => {
		setProjectList(projects.projects);
	}, []);

	if (!projectList) {
		return <div>Loading...</div>;
	}

	return (
		<div className="grid gap-y-4">
			{projectList.map((project, index) => (
				<Link key={index} href={project.link} className="text-primary-dark text-sm relative" target="_blank">
					<div
						key={index}
						className="flex gap-1 relative overflow-hidden items-center"
						style={{ width: 'calc(100% + 32px' }}
					>
						<h1 className="font-bold">
							<CrypticContainer sentence={project.title} />
						</h1>
						<p className="text-gray-300">{project.description}</p>
						<div className="flex-1 mx-2 relative before:content-[''] before:w-0 before:h-[1px] before:-bottom-1 before:animate-linearLine before:z-10 before:absolute after:content-[''] after:w-0 after:h-[1px] after:-bottom-1 after:animate-linearLine after:z-10 after:absolute"></div>
						<p>
							<TextAnimation name={project.date} />
						</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProjectList;
