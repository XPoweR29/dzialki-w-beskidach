'use client';

import React from 'react';
import styles from './HomeOffer.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { TextContainer } from '@/components/TextContainer/TextContainer';
import Image from 'next/image';
import photo from '../../assets/photos/dzialki-na-sprzedaz-w-beskidach.jpg';
import { OfferFeatures } from '@/components/OfferFeatures/OfferFeatures';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const HomeOffer = () => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={styles.section} id='oferta'>
			<Wrapper className={styles.wrapper}>
				<div className={styles.container}>
					<h2 className={styles.heading}>Atrakcyjne działki na sprzedaż</h2>

					<TextContainer className={styles.text}>
						<p>
							Oferujemy działki na sprzedaż w Pewli Ślemieńskiej, zaledwie 12 km
							od Żywca – zarówno działki budowlane, jak i działki rolne. Każda
							parcela ma bezpośredni dojazd drogą gruntową, znajduje się blisko
							lasu i zachwyca panoramą górskich szczytów, co czyni ją idealną
							inwestycją pod budowę całorocznego domu, rekreacyjnego domku czy
							agroturystyki.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							dolorum in reprehenderit voluptas tempore, vitae odio? Officiis
							ipsa expedita aperiam modi quis, nobis repellendus tenetur
							perspiciatis possimus amet sint aut placeat, dignissimos velit
							asperiores! Dolores voluptatibus minus quaerat error eius in,
							nesciunt, voluptate, aliquam deserunt vel qui pariatur alias
							placeat odio non itaque at iure vitae architecto assumenda
							cupiditate eveniet.
						</p>
					</TextContainer>

					{breakpoint.xxl && <OfferFeatures className={styles.features} />}
				</div>

				<Image
					className={styles.photo}
					src={photo}
					alt='działki na sprzedaż w beskidzie żywieckim'
					draggable={false}
				/>

				{!breakpoint.xxl && <OfferFeatures className={styles.features} />}
			</Wrapper>
		</section>
	);
};
