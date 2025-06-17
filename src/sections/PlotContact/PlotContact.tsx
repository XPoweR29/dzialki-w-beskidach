'use client';

import React from 'react';
import styles from './PlotContact.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { motion } from 'motion/react';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Map } from '@/components/Map/Map';

interface Props {
	mapLocation?: string;
}

export const PlotContact = ({ mapLocation }: Props) => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<motion.div
					className={styles.formContainer}
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ amount: 0.2, once: true }}>
					<ContactForm className={styles.form}/>
					{breakpoint.lg && <Map className={styles.map} anime={false} location={mapLocation}/>}
				</motion.div>
			</Wrapper>
		</section>
	);
};
