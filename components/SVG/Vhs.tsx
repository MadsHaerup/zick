'use client';
import React from 'react';
import vhs from '../../public/images/VHS.svg';
import vhsLight from '../../public/images/VHS-light.svg';

import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

const Vhs = () => {
	const { currentTheme } = useTheme();
	return (
		<Image className="shadow-lg" src={currentTheme == 'dark' ? vhs : vhsLight} alt="Logo" width={700} height={100} />
	);
};

export default Vhs;
