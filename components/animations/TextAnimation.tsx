'use client';
import { motion } from 'framer-motion';

type TextAnimationProps = {
	name: string;
	delay?: number;
};

const TextAnimation: React.FC<TextAnimationProps> = ({ name, delay = 0.3 }) => {
	const animationVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
				delay: delay,
			},
		},
	};

	const letterVariants = {
		initial: {
			opacity: 0,
			x: -10,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
	};

	return (
		<motion.div initial="initial" animate="animate" variants={animationVariants} className="text-center py-2">
			{name.split('').map((char, index) => {
				return (
					<motion.span
						key={index}
						initial="initial"
						animate="animate"
						variants={letterVariants}
						transition={{
							ease: 'easeInOut',
							duration: 0.2,
							delay: index * 0.1,
						}}
						className="inline-block"
					>
						<motion.span
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.2, delay: index * 0.1 }}
							className="transition-opacity"
						>
							{char}
						</motion.span>
					</motion.span>
				);
			})}
		</motion.div>
	);
};

export default TextAnimation;
