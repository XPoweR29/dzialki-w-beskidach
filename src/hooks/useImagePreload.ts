import { useEffect, useState } from 'react';

export const useImagePreload = (src: string) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => setImgLoaded(true);
	}, [src]);

	return imgLoaded;
};
