'use client';
import { motion } from 'framer-motion';

type ScaleIn = {
	children: React.ReactNode;
};

const ScaleIn = ({ children }: ScaleIn) => (
	<div className="flex justify-center items-center h-screen">
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.5 }}
			className="relative bg-white rounded-lg p-8"
		>
			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 30 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="text-4xl font-bold"
			>
				Title
			</motion.h1>
		</motion.div>
	</div>
);

export default ScaleIn;
