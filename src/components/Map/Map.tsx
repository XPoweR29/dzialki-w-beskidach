import React from 'react';
import { motion } from 'motion/react';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const Map = ({ className, anime=true }: {className?: string, anime?: boolean;}) => {
	const { breakpoint } = useBreakpoints();
	const animationProps = breakpoint.lg && anime?{
			initial: {opacity: 0, x: -40},
			whileInView: {opacity: 1, x:0},
			transition: {duration: 0.5},
			viewport: {amount: 0.4, once: true}
	}: {};

	return (
		<motion.iframe
			{...animationProps}
			src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1335.3527090754922!2d19.337459784325766!3d49.68918673453336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDQxJzIwLjciTiAxOcKwMjAnMTYuOSJF!5e1!3m2!1spl!2spl!4v1748966558939!5m2!1spl!2spl'
			className={className}
			width='600'
			height='450'
			allowFullScreen={false}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'></motion.iframe>
	);
};
