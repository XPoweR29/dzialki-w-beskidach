'use client';

import React from 'react';
import styles from './PlotOther.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { motion } from 'motion/react';
import { PlotSwiper } from '@/components/PlotSwiper/PlotSwiper';

interface Props {
	heading: React.ReactNode;
	text: string;
}
export const PlotOther = ({ heading, text }: Props) => {
	return (
		<section className={styles.section} id='dzialki'>
			<Wrapper>
				{heading}
				<p className={styles.text}>
					{text}
				</p>
			</Wrapper>

			<motion.div
				className={styles.plotsContainer}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ amount: 0.3, once: true }}>
				<PlotSwiper />
			</motion.div>
		</section>
	);
};
