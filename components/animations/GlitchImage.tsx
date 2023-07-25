import React from 'react';
import './Glitch.css';

type GlitchImageProps = {
	src: string;
	text?: string;
};

const GlitchImage = ({ src, text }: GlitchImageProps) => {
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
				<div className="imgWrap">
					<img className="red" src={src} />
					<img className="green" src={src} />
					<img className="blue" src={src} />
					<p className="text">
						<span>{text}</span>
					</p>
				</div>
			</div>
		</>
	);
};
export default GlitchImage;
