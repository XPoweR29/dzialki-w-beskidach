'use client';

import React, { useRef } from 'react';
import styles from './OfferFeatures.module.scss';
import Image from 'next/image';

import invest from '../../assets/icons/icon_invest.svg';
import house from '../../assets/icons/icon_house.svg';
import nature from '../../assets/icons/icon_nature.svg';
import { useInView } from 'motion/react';

export const OfferFeatures = ({ className }: {className?: string}) => {
	const containerRef = useRef(null);
	const inView = useInView(containerRef, {once: false, amount: 1});

	return (
		<div className={`${styles.feature} ${className}`} ref={containerRef}>
			<div className={`${styles.item} ${inView ? styles['item--anime'] : ''}`} style={{animationDelay: "0"}}>
				<Image src={invest} alt='Działka pod inwestycję' draggable={false} />
				<p>Pewna inwestycja</p>
			</div>

			<div className={`${styles.item} ${inView ? styles['item--anime'] : ''}`} style={{animationDelay: "0.3s"}}>
				<Image src={house} alt='Działka pod budowę domu' draggable={false} />
				<p>Pod dom lub rekreację</p>
			</div>

			<div className={`${styles.item} ${inView ? styles['item--anime'] : ''}`} style={{animationDelay: "0.6s"}}>
				<Image src={nature} alt='Blisko natury' draggable={false} />
				<p>Spokój i natura</p>
			</div>
		</div>
	);
};
