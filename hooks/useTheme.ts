import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '../context/ThemeContext';

export const useTheme = () => useContext<ThemeContextProps>(ThemeContext);
