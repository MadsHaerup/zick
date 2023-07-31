'use client';
import { motion, useInView } from 'framer-motion';

type TextProps = {
	text: string;
	tailwindsCSS?: string;
	refProp: any;
	level?: 0 | 1 | 2;
};

const Text = ({ text, tailwindsCSS, refProp, level = 0 }: TextProps) => {
	const isInView = useInView(refProp, { amount: 'all' });

	return (
		<>
			{level == 0 && isInView && (
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className={` ${tailwindsCSS}`}
				>
					{text}
				</motion.p>
			)}
			{level == 1 && isInView && (
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className={` ${tailwindsCSS}`}
				>
					{text}
				</motion.h1>
			)}
			{level == 2 && isInView && (
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className={` ${tailwindsCSS}`}
				>
					{text}
				</motion.h2>
			)}
		</>
	);
};

export default Text;
