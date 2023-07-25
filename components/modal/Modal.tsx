import { XCircleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const { currentTheme } = useTheme();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	const handleClose = () => {
		setIsModalOpen(false);
		onClose();
	};

	return (
		<>
			{isModalOpen && (
				<div
					className="fixed m-12 rounded-md inset-0 z-10 bg-no-repeat bg-center object-cover bg-fixed"
					style={{
						background: currentTheme == 'dark' ? `url(/images/blackwave.jpg)` : `url(/images/whitewave.jpg)`,
					}}
				>
					<div className="m-12 fixed rounded-md inset-0 z-10 flex items-center justify-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg ">
						<button
							className="absolute top-2 right-2 text-secondary dark:text-secondary-dark hover:text-gray-800 focus:text-gray-800"
							onClick={handleClose}
						>
							<XCircleIcon className="z-10 w-[40px] h-[40px]" />
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
