import BgScale from '@/components/animations/BgScale';
import ProjectList from '@/components/projectList/ProjectList';
import React from 'react';

const page = () => {
	return (
		<main className="noise text-primary dark:text-primary-dark">
			<div className="inset-0 z-10 flex absolute items-center justify-center ">
				<div className="max-w-[720px] w-full mx-auto">
					<ProjectList />
				</div>
			</div>
		</main>
	);
};

export default page;
