'use client';
import React, { createContext, useEffect, useState } from 'react';

export interface ThemeContextProps {
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	children: React.ReactNode;
	initialTheme: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	const [currentThemeStorage, setCurrentThemeStorage] = useState(() => {
		const savedTheme = typeof localStorage !== 'undefined' && localStorage.getItem('theme');
		return savedTheme ? savedTheme : initialTheme;
	});

	useEffect(() => {
		localStorage.setItem('theme', currentThemeStorage);

		if (currentThemeStorage === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('lightTheme');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('lightTheme');
		}
	}, [currentThemeStorage]);

	const toggleTheme = () => {
		const newTheme = currentThemeStorage === 'light' ? 'dark' : 'light';
		setCurrentThemeStorage(newTheme);
	};

	return <ThemeContext.Provider value={{ toggleTheme }}>{children}</ThemeContext.Provider>;
};
