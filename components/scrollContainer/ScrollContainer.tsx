'use client';
import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SVG from '@/components/SVG/SVG';
import { TbBrandMongodb, TbBrandNextjs, TbBrandReactNative, TbBrandVercel } from 'react-icons/tb';
import InViewContainer from '@/components/animations/InViewContainer';

interface ContainerProps {
	content: string;
	title: string;
	xStart?: string;
	xEnd?: string;
	yStart?: string;
	yEnd?: string;
	rotationStart?: number;
	roatationEnd?: number;
	children: React.ReactNode;
	position?: 'left' | 'right';
}

const ScrollContainer = ({
	content,
	title,
	xStart = '-50%',
	xEnd = '100%',
	yStart = '0%',
	yEnd = '10%',
	rotationStart = 45,
	roatationEnd = -10,
	children,
	position = 'left',
}: ContainerProps) => {
	const containerRef = useRef<HTMLElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	});

	const valX = useTransform(scrollYProgress, [0, 1], [xStart, xEnd]);
	const valY = useTransform(scrollYProgress, [0, 1], [yStart, yEnd]);
	const valScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
	const valRotation = useTransform(scrollYProgress, [0, 1], [rotationStart, roatationEnd]);

	const ref = useRef<HTMLElement | null>(null);
	return (
		<section
			ref={containerRef}
			className="noise relative text-primary dark:text-primary-dark overflow-hidden"
			style={{ padding: 'clamp(1rem,5vw,4em)' }}
		>
			<InViewContainer refProp={ref} tailwindsCSS="w-full grid grid-cols-2">
				<div className={`grid gap-4 w-full ${position == 'right' ? 'col-start-2 col-end-3' : 'col-start-1 col-end-2'}`}>
					<h2 className="text-6xl font-bold">{title}</h2>
					<p className="text-2xl font-normal ">{content}</p>
				</div>
			</InViewContainer>

			<section ref={ref} className="grid justify-center inset-0 absolute">
				<motion.div
					style={{ translateX: valX, translateY: valY, scaleX: valScale, scaleY: valScale, rotate: valRotation }}
					className="relative w-auto h-min-content"
				>
					{children}
				</motion.div>
			</section>
		</section>
	);
};

export default ScrollContainer;
