'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ContactStart.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { useImagePreload } from '@/hooks/useImagePreload';
import Loading from '@/app/loading';

export const ContactStart = () => {
	const heroRef = useRef<HTMLDivElement | null>(null);
	const bgLoaded = useImagePreload('/photos/hero_photo.jpg');

	const startHeroPosition = `10%`;

	useEffect(() => {
		function handleScroll() {
			if (!heroRef.current) return;
			const offset = window.scrollY;
			heroRef.current!.style.backgroundPositionY = `calc(${startHeroPosition} + ${
				offset * 0.5
			}px)`;
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [startHeroPosition]);

	if (!bgLoaded) return <Loading />;

	return (
		<section
			className={styles.section}
			ref={heroRef}
			style={{ backgroundPositionY: `${startHeroPosition}` }}>
			<Wrapper className={styles.wrapper}>
				<h1>Skontaktuj się z nami</h1>
			</Wrapper>
		</section>
	);
};
