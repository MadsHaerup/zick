'use client';
import { motion } from 'framer-motion';
import React from 'react';

type LetterProps = {
	letters: string;
	tailwindCSS?: string;
	letterSize?: string;
};

const LetterStacking = ({ letters, tailwindCSS, letterSize = 'text-6xl' }: LetterProps) => {
	const transition = { ease: [0.6, 0.01, -0.05, 0.9], duration: 1 };

	const container = {
		initial: {
			opacity: 1,
		},
		animate: {
			opacity: 1,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
	};

	const letter = {
		initial: {
			y: 100,
		},
		animate: {
			y: 0,
			transition: { ...transition },
		},
		exit: { y: 100 },
	};

	return (
		<motion.div className={`${tailwindCSS} overflow-hidden`}>
			<motion.span variants={container} initial="initial" animate="animate" exit="exit">
				{letters.split('').map((char, index) => (
					<motion.span key={index} variants={letter} className={`relative inline-block ${letterSize}`}>
						{char}
					</motion.span>
				))}
			</motion.span>
		</motion.div>
	);
};

export default LetterStacking;
