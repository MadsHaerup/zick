import React from 'react';
import tv from '../../public/images/TV.svg';
import Image from 'next/image';

const TV = () => {
	return <Image className="shadow-lg" src={tv} alt="Logo" width={700} height={100} />;
};

export default TV;
