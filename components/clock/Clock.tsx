'use client';

import { useEffect, useState } from 'react';
import TextAnimation from '../animations/TextAnimation';

const Clock = () => {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const options = { timeZone: 'Europe/Copenhagen' };
			const formattedTime = now.toLocaleTimeString('en-DK', options);
			setCurrentTime(formattedTime);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <TextAnimation delay={2.0} name={currentTime} />;
};

export default Clock;
