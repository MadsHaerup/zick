'use client';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Dock from '@/components/dock/Dock';
import Modal from '@/components/modal/Modal';
import { useEffect, useState } from 'react';
import GlassCard from '@/components/card/glassCard/GlassCard';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'Mads Haerup | Developer',
// 	description: 'Software Developer | Web Portfolio',
// };

const style = 'relative bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [modal, setModal] = useState<number>(0);
	console.log(modal);

	useEffect(() => {
		switch (modal) {
			case 1:
				setModalOpen(true);
				break;
			case 2:
				setModalOpen(true);
				break;
			case 3:
				setModalOpen(true);
				break;
			case 4:
				setModalOpen(true);
				break;
			case 5:
				setModalOpen(true);
				break;
			case 6:
				setModalOpen(true);
				break;
			default:
				setModal(0);
				setModalOpen(false);
				break;
		}
	}, [modal]);

	const handleCloseModal = () => {
		setModalOpen(false);
		setModal(0);
	};
	return (
		<ThemeProvider initialTheme="dark">
			<html lang="en" className="dark">
				<body className={`${inter.className} min-h-screen ${style} `}>
					{children}

					{modal == 3 && (
						<Modal isOpen={modalOpen} onClose={handleCloseModal} src="/images/bluewave.jpeg">
							<div className="grid grid-cols-2 gap-2">
								<GlassCard w={200} h={200}>
									<h1>Hello world!</h1>
								</GlassCard>
								<GlassCard w={200} h={200}>
									<h1>Hello world!</h1>
								</GlassCard>
								<GlassCard w={200} h={200}>
									<h1>Hello world!</h1>
								</GlassCard>
								<GlassCard w={200} h={200}>
									<h1>Hello world!</h1>
								</GlassCard>
							</div>
						</Modal>
					)}

					{modal == 4 && (
						<Modal isOpen={modalOpen} onClose={handleCloseModal} src="/images/semipurplewave.jpg">
							<GlassCard w={200} h={200}>
								<h1>Hello world!</h1>
							</GlassCard>
						</Modal>
					)}

					{modal == 5 && (
						<Modal isOpen={modalOpen} onClose={handleCloseModal} src="/images/blackwave.jpg">
							<GlassCard w={200} h={200}>
								<h1>Hello world!</h1>
							</GlassCard>
						</Modal>
					)}

					<Dock setModal={setModal} />
				</body>
			</html>
		</ThemeProvider>
	);
}
