export type WeatherDataProps = {
	currentConditions: {
		temp: number;
		datetime: string;
	};
};

export async function getWeatherData(): Promise<WeatherDataProps> {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/copenhagen?unitGroup=metric&key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&contentType=json`
	);
	const data = await response.json();
	return data as WeatherDataProps;
}
