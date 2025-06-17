import React from 'react';
import { motion } from 'motion/react';
import { useBreakpoints } from '@/hooks/useBreakpoint';

interface Props {
	className?: string;
	anime?: boolean;
	location?: string;
}
export const Map = ({
	className,
	anime = true,
	location = 'https://www.google.com/maps?q=49.689205,19.338610&hl=pl&t=k&z=17&output=embed',
}: Props) => {
	const { breakpoint } = useBreakpoints();
	const animationProps =
		breakpoint.lg && anime
			? {
					initial: { opacity: 0, x: -40 },
					whileInView: { opacity: 1, x: 0 },
					transition: { duration: 0.5 },
					viewport: { amount: 0.4, once: true },
			  }
			: {};

	return (
		<motion.iframe
			{...animationProps}
			src={location}
			className={className}
			width='600'
			height='450'
			allowFullScreen={false}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'></motion.iframe>
	);
};
