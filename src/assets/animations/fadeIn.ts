import { Variants } from "motion/react";

export const fadeInRight: Variants = {
	hidden: { opacity: 0, x: -20, scale: 0.95 },
	visible: {
		opacity: 1,
		x: 0,
		scale:1,

		transition: {
			duration: 0.7,
			ease: 'easeOut',
		},
	},
};
