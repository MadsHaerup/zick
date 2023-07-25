'use client';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Dock from '@/components/dock/Dock';
import Modal from '@/components/modal/Modal';
import { useEffect, useState } from 'react';
import GlassCard from '@/components/card/glassCard/GlassCard';
import { modalConfigurations } from '@/data/ModalConfig';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'Mads Haerup | Developer',
// 	description: 'Software Developer | Web Portfolio',
// };

const style = 'relative bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [modal, setModal] = useState<number>(0);

	useEffect(() => {
		const modalConfiguration = modalConfigurations.find(config => config.modalNumber === modal);

		if (modalConfiguration) {
			setModalOpen(true);
		} else {
			setModalOpen(false);
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

					{modalConfigurations.map(config => {
						if (config.modalNumber === modal) {
							return (
								<Modal isOpen={modalOpen} onClose={handleCloseModal}>
									{config.content}
								</Modal>
							);
						}
						return null;
					})}

					<Dock setModal={setModal} />
				</body>
			</html>
		</ThemeProvider>
	);
}
