import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mads Haerup | Developer',
	description: 'Software Developer | Web Portfolio',
};

const style = 'bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider initialTheme="dark">
			<html lang="en">
				<body className={`${inter.className} min-h-screen ${style} `}>{children}</body>
			</html>
		</ThemeProvider>
	);
}
