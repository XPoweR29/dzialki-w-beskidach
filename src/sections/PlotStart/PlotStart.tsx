'use client';

import React, { useEffect, useRef } from 'react';
import styles from './PlotStart.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';

interface Props {
	title?: string;
	heading: React.ReactNode | string;
}
export const PlotStart = ({title, heading}: Props) => {
	const heroRef = useRef<HTMLDivElement | null>(null);

	const startHeroPosition = `10%`;

	useEffect(() => {
		function handleScroll() {
			const offset = window.scrollY;
			heroRef.current!.style.backgroundPositionY = `calc(${startHeroPosition} + ${
				offset * 0.5
			}px)`;
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section
			className={styles.section}
			ref={heroRef}
			style={{ backgroundPositionY: `${startHeroPosition}` }}>
			<Wrapper className={styles.wrapper}>
				<h1>{title}</h1>
				<h2>{heading}</h2>
			</Wrapper>
		</section>
	);
};
