import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Slider.css';

type SliderProps = {
	children: React.ReactNode;
};

const Slider = ({ children }: SliderProps) => {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const ghostRef = useRef<HTMLDivElement | null>(null);
	const [scrollRange, setScrollRange] = useState<number>(0);
	const [viewportW, setViewportW] = useState<number>(0);

	useLayoutEffect(() => {
		if (scrollRef.current) {
			setScrollRange(scrollRef.current.scrollWidth);
		}
	}, [scrollRef]);

	const onResize = useCallback((entries: ResizeObserverEntry[]) => {
		for (let entry of entries) {
			setViewportW(entry.contentRect.width);
		}
	}, []);

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver(entries => onResize(entries));
		if (ghostRef.current) {
			resizeObserver.observe(ghostRef.current);
		}
		return () => resizeObserver.disconnect();
	}, [onResize]);

	const { scrollYProgress } = useScroll();
	const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW]);
	const physics = { damping: 15, mass: 0.27, stiffness: 55 };
	const spring = useSpring(transform, physics);

	return (
		<>
			<div className="scroll-container">
				<motion.section ref={scrollRef} style={{ x: spring }} className="thumbnails-container">
					<div className="thumbnails">
						{React.Children.map(children, (child, index) => (
							<div key={index} className="thumbnail">
								{child}
							</div>
						))}
					</div>
				</motion.section>
			</div>
			<div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
		</>
	);
};

export default Slider;
