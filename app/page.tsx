'use client';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import Weather from '@/components/weather/Weather';
import Slider from '@/components/imageSlider/ImageSlider';
import GlitchImage from '@/components/animations/GlitchImage';
import ScaleIn from '@/components/animations/ScaleIn';
import Glitch from '@/components/animations/GlitchText';

export default function Home() {
	return (
		<main className={`min-h-screen ${styles.container}`}>
			<div className="grid h-screen w-screen mx-auto justify-center text-6xl items-center">
				<div>
					<Glitch content="mads haerup" tailwindCSS="mb-6" />
					<div className="flex gap-4">
						<div className="translate-y-10 grayscale hover:grayscale-0">
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5 }}
							>
								<GlitchImage src="/images/coolkids.png" text="90s kid" />
							</motion.div>
						</div>
						<div className="translate-y-0 grayscale hover:grayscale-0">
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5 }}
							>
								<GlitchImage src="/images/computer.png" text="Software Developer" />
							</motion.div>
						</div>
						<div className="translate-y-10 grayscale hover:grayscale-0">
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5 }}
							>
								<GlitchImage src="/images/chelsea90s.png" text="Chelsea F.C Fan" />
							</motion.div>{' '}
						</div>
					</div>
				</div>
			</div>
			<Weather />
		</main>
	);
}
