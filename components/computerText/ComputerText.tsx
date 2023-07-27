import React from 'react';
import localFont from 'next/font/local';
import TextAnimation from '../animations/TextAnimation';
const myFont = localFont({ src: '../../font/NineteenNinetySeven.ttf' });

type Textprops = {
	text: string;
};

const ComputerText = ({ text }: Textprops) => {
	return (
		<div className={`${myFont.className} text-2xl`}>
			<TextAnimation name={text} />
		</div>
	);
};

export default ComputerText;
