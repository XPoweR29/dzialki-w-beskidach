'use client';

import styles from './OfferFeatures.module.scss';
import Image from 'next/image';

import invest from '../../assets/icons/icon_invest.svg';
import house from '../../assets/icons/icon_house.svg';
import nature from '../../assets/icons/icon_nature.svg';
import { motion } from 'motion/react';

const FEATURES = [
   { icon: invest, title: 'Pewna inwestycja', alt: 'Działka pod inwestycję' },
   { icon: house, title: 'Pod dom lub rekreację', alt: 'Działka pod budowę domu' },
   { icon: nature, title: 'Spokój i natura', alt: 'Blisko natury' },
];

export const OfferFeatures = ({ className }: {className?: string}) => {
	return (
		<div className={`${styles.feature} ${className || ''}`}>
			{FEATURES.map((feature, index) => (
				<motion.div
					key={index}
					className={styles.item}
					initial={{ opacity: 0, scale: 0, x: -20}}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{
						duration: 0.75,
						delay: index * 0.25,
						ease: [0.25, 0.1, 0.25, 1.0],
					}}>
					<Image src={feature.icon} alt={feature.alt} draggable={false} />
					<p>{feature.title}</p>
				</motion.div>
			))}
		</div>
	);
};
