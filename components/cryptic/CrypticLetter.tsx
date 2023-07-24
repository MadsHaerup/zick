'use client';
import React, { useEffect, useState } from 'react';

type Props = {
	letter: string;
};

const CrypticLetter: React.FC<Props> = ({ letter }) => {
	const alphabet = Array.from({ length: 36 }, (_, i) => String.fromCharCode(33 + i));
	const characters = [...alphabet, letter];
	const [currentLetter, setCurrentLetter] = useState<string | null>(null);

	useEffect(() => {
		let count = 0;

		const intervalId = setInterval(() => {
			const randomLetter = characters[Math.floor(Math.random() * 27)];
			setCurrentLetter(randomLetter);

			if (randomLetter.toLowerCase() === letter.toLowerCase()) {
				clearInterval(intervalId);
			} else {
				count++;
				if (count === 30) {
					setCurrentLetter(letter);
					clearInterval(intervalId);
				}
			}
		}, 25);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <span>{currentLetter?.toUpperCase()}</span>;
};

export default CrypticLetter;
