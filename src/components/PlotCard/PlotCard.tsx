import React from 'react';
import styles from './PlotCard.module.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';


export const PlotCard = ({cardImg, title, surface, destination, location, pageSlug, pricePerM}: PlotCard) => {
	return (
		<article className={styles.card}>
			<Image
				className={styles.photo}
				src={cardImg}
				priority
				alt='Działka pod lasem w beskidzie żywieckim'
				draggable={false}
			/>

			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.featuresList}>
				<li className={styles.item}>
					<Icon icon='entypo:price-tag' aria-hidden />
					<span className={styles.price}>{`${pricePerM} zł/m²`}</span>
				</li>
				<li className={styles.item}>
					<Icon icon='fluent:slide-size-24-filled' aria-hidden />
					<span>{surface}</span>
				</li>
				<li className={styles.item}>
					<Icon icon='basil:document-solid' aria-hidden />
					<span>{destination}</span>
				</li>
				<li className={styles.item}>
					<Icon icon='mdi:location' aria-hidden />
					<span>{location}</span>
				</li>
			</ul>

			<Link href={`/${pageSlug}`} className={styles.button}>
				Szczegóły
			</Link>
		</article>
	);
};
