import styles from './Home.module.css';
import Weather from '@/components/weather/Weather';

export default function Home() {
	return (
		<main className={`min-h-screen ${styles.container}`}>
			<div className="grid h-screen w-screen mx-auto justify-center text-6xl items-center"></div>
			<Weather />
		</main>
	);
}
