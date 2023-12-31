'use client';
import { motion } from 'framer-motion';
import Weather from '@/components/weather/Weather';
import GlitchImage from '@/components/animations/GlitchImage';
import Glitch from '@/components/animations/GlitchText';
import Slider from '@/components/slider/Slider';

export default function Home() {
	return (
		<main className="noise box">
			<Glitch
				content="mads haerup"
				tailwindCSS="mb-6 text-center text-6xl fixed left-1/2 top-[20%] -translate-x-2/4 -translate-y-2/4"
			/>

			<Slider>
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
			</Slider>

			<Weather />
		</main>
	);
}
