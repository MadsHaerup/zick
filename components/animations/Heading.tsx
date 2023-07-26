'use client';
import { motion } from 'framer-motion';

type HeadingProps = {
	title: string;
	tailwindsCSS?: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ title, tailwindsCSS, level = 1 }: HeadingProps) => {
	return (
		<>
			{level == 1 && (
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className={` ${tailwindsCSS} font-bold`}
				>
					{title}
				</motion.h1>
			)}

			{level == 2 && (
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className={` ${tailwindsCSS} font-bold`}
				>
					{title}
				</motion.h2>
			)}
		</>
	);
};

export default Heading;
