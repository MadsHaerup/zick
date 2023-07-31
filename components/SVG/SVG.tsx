import React from 'react';
import Image from 'next/image';

type SVGProps = {
	src: string;
	tailwindCSS?: string;
};
const SVG = ({ src, tailwindCSS }: SVGProps) => {
	return <Image className={`shadow-lg ${tailwindCSS}`} src={src} alt="Logo" width={400} height={400} />;
};

export default SVG;
