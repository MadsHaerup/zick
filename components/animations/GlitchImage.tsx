import React from 'react';
import './Glitch.css';
import Image from 'next/image';

type GlitchImageProps = {
	src: string;
	text?: string;
};

const GlitchImage = ({ src, text = '' }: GlitchImageProps) => {
	return (
		<>
			<svg className="filter">
				<filter id="alphaRed">
					<feColorMatrix mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
				</filter>
				<filter id="alphaGreen">
					<feColorMatrix mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
				</filter>
				<filter id="alphaBlue">
					<feColorMatrix mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="joint" />
				</filter>
				<filter id="alpha">
					<feColorMatrix type="saturate" values="0" />
				</filter>
			</svg>
			<div className="page">
				<div className="imgWrap relative overflow-hidden w-[150px] h-[150px] sm:h-[220px] sm:w-[220px] md:h-[320px] md:w-[320px] lg:w-[400px] lg:h-[400px]">
					<Image alt={text} className="red" src={src} width={400} height={400} priority />
					<Image alt={text} className="green" src={src} width={400} height={400} priority />
					<Image alt={text} className="blue" src={src} width={400} height={400} priority />
					<p className="text">
						<span>{text}</span>
					</p>
				</div>
			</div>
		</>
	);
};
export default GlitchImage;
