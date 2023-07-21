import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Dock from '@/components/dock/Dock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mads Haerup | Developer',
	description: 'Software Developer | Web Portfolio',
};

const style = 'relative bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider initialTheme="dark">
			<html lang="en" className="dark">
				<body className={`${inter.className} min-h-screen ${style} `}>
					{children}
					<Dock />
				</body>
			</html>
		</ThemeProvider>
	);
}
