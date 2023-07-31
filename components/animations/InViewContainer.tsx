'use client';
import { motion, useInView } from 'framer-motion';

type TextProps = {
	children: React.ReactNode;
	tailwindsCSS?: string;
	refProp: any;
};

const InViewContainer = ({ children, tailwindsCSS, refProp }: TextProps) => {
	const isInView = useInView(refProp, { amount: 0.6 });

	return (
		<motion.div
			style={{
				transform: isInView ? 'translateY(0px)' : 'translateY(30px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
			}}
			className={` ${tailwindsCSS}`}
		>
			{children}
		</motion.div>
	);
};

export default InViewContainer;
