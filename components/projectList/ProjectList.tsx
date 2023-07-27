'use client';
import React, { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import TextAnimation from '../animations/TextAnimation';
import CrypticContainer from '../cryptic/CrypticContainer';

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
		return (
			<div className="w-full grid justify-center">
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div className="grid">
			{projectList.map((project, index) => (
				<Link
					key={index}
					href={project.link}
					className="text-primary dark:text-primary-dark text-sm relative "
					target="_blank"
				>
					<div
						key={index}
						className="flex gap-1 relative overflow-hidden items-center hover:bg-neutral-300 dark:hover:bg-neutral-400 p-4 rounded-md"
						style={{ width: 'calc(100% + 32px' }}
					>
						<h1 className="font-bold">
							<CrypticContainer sentence={project.title} />
						</h1>
						<p className=" text-secondary">{project.description}</p>
						<div className=" flex-1 mx-2 relative before:content-[''] before:w-0 before:h-[1px] before:-bottom-1 before:animate-linearLine before:z-10 before:absolute after:content-[''] after:w-0 after:h-[1px] after:-bottom-1 after:animate-linearLine after:z-10 after:absolute"></div>
						<TextAnimation name={project.date} tailwindCSS="text-secondary" />
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProjectList;
