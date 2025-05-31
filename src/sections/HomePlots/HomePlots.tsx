'use client';

import React from 'react';
import styles from './HomePlots.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { motion } from 'motion/react';
import { PlotSwiper } from '@/components/PlotSwiper/PlotSwiper';

export const HomePlots = () => {
	return (
		<section className={styles.section} id='dzialki'>
			<Wrapper>
				<h2 className={styles.heading}>
					Działki budowlane i rolne w Beskidzie Żywieckim<br/>
					<span>Inwestycja z widokiem na góry</span>
				</h2>
				<p className={styles.text}>
					Zapoznaj się z aktualnymi ofertami działek na sprzedaż w Beskidzie
					Żywieckim. Oferujemy atrakcyjne lokalizacje z pięknymi widokami,
					idealne pod budowę domu, rekreację lub inwestycję. Sprawdź, która z
					dostępnych parceli najlepiej odpowiada Twoim planom.
				</p>
			</Wrapper>

			<motion.div
				className={styles.plotsContainer}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ amount: 0.3, once: false }}>
				<PlotSwiper />
			</motion.div>
		</section>
	);
};
