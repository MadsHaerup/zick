'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { DockContextType } from '../../types';
import DockItem from './DockItem';
import { MouseProvider } from '@/context/MouseProvider';
import {
	CommandLineIcon,
	EnvelopeIcon,
	HomeIcon,
	MoonIcon,
	Squares2X2Icon,
	SunIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

/**
 * <DockContext> provider.
 * @param hovered - If is hovering <nav> element.
 * @param width - The width of <nav> element.
 */
const DockContext = createContext<DockContextType | null>(null);

export const useDock = () => {
	return useContext(DockContext);
};

const Dock = ({ setModal }: any) => {
	const ref = useRef<HTMLElement>(null);
	const [hovered, setHovered] = useState(false);
	const [width, setWidth] = useState<number | undefined>();
	const { currentTheme, toggleTheme } = useTheme();
	const [isRotating, setIsRotating] = useState(false);

	useEffect(() => {
		setWidth(ref?.current?.clientWidth);
	}, []);

	const handleButtonClick = () => {
		setIsRotating(true);
		setTimeout(() => {
			setIsRotating(false);
		}, 1000); // Adjust the duration as per your animation CSS
	};

	return (
		<MouseProvider>
			<footer
				className={
					'fixed rounded-full shadow-md bg-[rgba(255, 255, 255, 0.7)] dark:bg-[rgba(22, 22, 22, 0.8)] bottom-6 z-50 flex w-auto justify-center border border-primary-border left-1/2 "transform translate-x-[-50%] translate-y-[-50%] animate-menu'
				}
			>
				<DockContext.Provider value={{ hovered, width }}>
					<nav
						ref={ref}
						className="bg-grid flex justify-center rounded-md p-4"
						onMouseOver={() => setHovered(true)}
						onMouseOut={() => setHovered(false)}
					>
						<ul className="flex h-10 items-end justify-center space-x-3">
							<DockItem>
								<Link
									onClick={() => setModal(1)}
									className="relative flex h-full w-full items-center justify-center text-gray-400"
									aria-label="home page"
									href="/"
									rel="external nofollow noopener noreferrer"
								>
									<HomeIcon className="relative h-1/2 w-1/2 " aria-hidden="true" />
								</Link>
							</DockItem>
							<DockItem>
								<div
									className="relative flex h-full w-full items-center justify-center text-gray-400"
									onClick={() => setModal(2)}
								>
									<EnvelopeIcon className="relative h-1/2 w-1/2" aria-hidden="true" />
								</div>
							</DockItem>

							<DockItem>
								<div
									onClick={() => setModal(3)}
									className="relative flex h-full w-full items-center justify-center text-gray-400"
								>
									<Squares2X2Icon className="relative h-1/2 w-1/2" />
								</div>
							</DockItem>
							<DockItem>
								<div
									onClick={() => setModal(4)}
									className="relative flex h-full w-full items-center justify-center text-gray-400"
								>
									<CommandLineIcon className="relative h-1/2 w-1/2" />
								</div>
							</DockItem>
							<DockItem>
								<div
									onClick={() => setModal(5)}
									className="relative flex h-full w-full items-center justify-center text-gray-400"
								>
									<UserIcon className="relative h-1/2 w-1/2" />
								</div>
							</DockItem>
							<DockItem>
								<div
									onClick={() => {
										handleButtonClick();
										toggleTheme();
									}}
									className={`relative flex h-full w-full items-center justify-center text-gray-400 ${
										isRotating ? 'animate-rotating' : ''
									}`}
								>
									{currentTheme == 'dark' && <SunIcon className="w-1/2 h-1/2" />}
									{currentTheme == 'light' && <MoonIcon className="w-1/2 h-1/2" />}
								</div>
							</DockItem>
						</ul>
					</nav>
				</DockContext.Provider>
			</footer>
		</MouseProvider>
	);
};

export default Dock;
