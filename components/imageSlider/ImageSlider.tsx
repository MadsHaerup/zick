'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
	'/images/blackwave.jpg',
	'/images/semipurplewave.jpg',
	'/images/whitewave.jpg',
	// Add more image URLs here
];

const Slide: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
	<motion.div
		className="w-full h-full object-cover object-center"
		style={{ backgroundImage: `url(${imageUrl})` }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.5 }}
	/>
);

const Slider: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearTimeout(timer);
	}, [currentIndex]);

	return (
		<div className="w-[300px] h-[300px]">
			<AnimatePresence mode="wait">
				<Slide key={currentIndex} imageUrl={images[currentIndex]} />
			</AnimatePresence>
		</div>
	);
};

export default Slider;
