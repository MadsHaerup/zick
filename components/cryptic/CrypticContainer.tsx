import React from 'react';
import CrypticLetter from './CrypticLetter';

const CrypticContainer = ({ sentence }: any) => {
	return (
		<div>
			{sentence.split('').map((n: any) => (
				<CrypticLetter letter={n} />
			))}
		</div>
	);
};

export default CrypticContainer;
