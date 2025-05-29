'use client';

import React, { useEffect, useRef } from 'react';
import styles from './home_start.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Link from 'next/link';
import iconFb from '../../assets/icons/icon_facebook.svg';
import Image from 'next/image';

export const Home_start = () => {
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
					<h1>Działka na sprzedaż w Beskidzie Żywieckim</h1>
					<h2>
						Wybierz swoją działkę <br /> z widokiem na góry
					</h2>

					<Link href='/#oferta' className={styles.ctaBtn}>
						Zobacz ofertę
					</Link>

					<Link href='/#oferta' className={styles.socialBtn}>
						<Image
							src={iconFb}
							alt='Śledź nas na Facebooku'
							draggable={false}
						/>
					</Link>
				</Wrapper>
		</section>
	);
};
