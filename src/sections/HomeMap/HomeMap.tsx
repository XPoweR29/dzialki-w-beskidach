'use client';

import React from 'react';
import styles from './HomeMap.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import questionImg from '../../assets/images/questionMark.png';
import { Map } from '@/components/Map/Map';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TextContainer } from '@/components/TextContainer/TextContainer';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const HomeMap = () => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.container}>
					<h2 className={styles.heading}>Masz pytania?</h2>
					<TextContainer className={styles.text}>
						<p>Na mapie możesz łatwo sprawdzić, gdzie znajdują się działki.</p>

						<p>
							Chcesz obejrzeć teren osobiście? Skontakuj się z nami. Zadzwoń lub
							przejdź do{' '}
							<Link href={'/kontakt'} className={styles.link}>
								formularza kontaktowego
							</Link>
						</p>
					</TextContainer>

					<a
						href='tel:+48504058507'
						className={styles.phoneButton}
						aria-label='Zadzwoń pod numer 504 058 507'>
						<Icon icon='ri:phone-fill' className={styles.icon} />
						504 058 507
					</a>

					<Image
						src={questionImg}
						alt=''
						className={styles.questionImg}
						draggable={false}
						aria-hidden
					/>
				</div>
			{breakpoint.lg && <Map className={styles.map} />}
			</Wrapper>

			{!breakpoint.lg && <Map className={styles.map} />}
		</section>
	);
};
