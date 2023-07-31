'use client';
import { WeatherDataProps, getWeatherData } from '@/utils/weather';
import React, { useEffect, useState } from 'react';
import Clock from '../clock/Clock';
import TextAnimation from '../animations/TextAnimation';

const Weather = () => {
	const [weatherData, setWeatherData] = useState<WeatherDataProps>();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getWeatherData();
			setWeatherData(data);
		};

		fetchData();
	}, []);

	return (
		<div className="flex text-xs gap-1 fixed top-5 left-5 text-secondary dark:text-secondary-dark">
			<TextAnimation name="Copenhagen" delay={0.3} />
			<TextAnimation name={weatherData ? weatherData?.currentConditions?.temp?.toString() + '°' : ''} delay={1.5} />
			<Clock />
		</div>
	);
};

export default Weather;
