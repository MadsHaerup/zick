'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface PageProps {
	children: React.ReactNode;
}

const BgScale = ({ children }: PageProps) => {
	const { currentTheme } = useTheme();

	const backgroundImageVariants = {
		initial: {
			scale: 0.5,
		},
		scrolled: {
			scale: 1,
		},
	};

	const backgroundImageTransition = {
		type: 'spring',
		damping: 20,
		stiffness: 100,
	};

	return (
		<>
			<motion.div
				className="fixed inset-0 min-h-screen w-screen object-cover "
				initial="initial"
				animate={'scrolled'}
				variants={backgroundImageVariants}
				transition={backgroundImageTransition}
				style={{
					backgroundImage: currentTheme == 'dark' ? `url(/images/blackwave.jpg)` : `url(/images/whitewave.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			/>
			{children}
		</>
	);
};

export default BgScale;
