import React from 'react';
import localFont from 'next/font/local';
import TextAnimation from '../animations/TextAnimation';
const myFont = localFont({ src: '../../font/LeagueScriptNumberOne-webfont.woff' });

const Signature = () => {
	return (
		<div className={`${myFont.className} text-2xl`}>
			<TextAnimation name="Mads Haerup" />
		</div>
	);
};

export default Signature;
