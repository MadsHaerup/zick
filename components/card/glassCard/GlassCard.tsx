import React from 'react';

interface GlassCardProps {
	children: React.ReactNode;
	w: number;
	h: number;
}

const GlassCard = ({ children, w, h }: GlassCardProps) => {
	return (
		<div
			style={{ width: w + 'px', height: h + 'px' }}
			className={`relative mx-auto rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg flex flex-col items-center justify-center`}
		>
			<div className="z-10 text-secondary">{children}</div>
		</div>
	);
};

export default GlassCard;
