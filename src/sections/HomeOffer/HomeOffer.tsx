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
							Oferujemy na sprzedaż wyselekcjonowane działki zlokalizowane w
							malowniczych miejscowościach Beskidu Żywieckiego – w Gilowicach
							oraz w Pewli Ślemieńskiej. To spokojne i atrakcyjne tereny
							oddalone zaledwie kilkanaście minut jazdy od Żywca, idealne
							zarówno pod inwestycję, jak i wypoczynek.
						</p>
						<p>
							W ofercie znajdują się działki o różnych
							powierzchniach. Część z nich ma bezpośredni dostęp do drogi
							asfaltowej lub utwardzonej, a także dostęp do mediów. Wybrane działki położone są w
							sąsiedztwie lasów i szlaków turystycznych, oferując piękne widoki
							na góry i ciszę z dala od miejskiego zgiełku. Inne wyróżniają się
							świetnym układem, korzystnym planem zagospodarowania i bliskością
							lokalnej infrastruktury.
						</p>
						<p>
							Jeśli szukasz miejsca na dom, rekreację, działalność turystyczną
							lub bezpieczną lokatę kapitału – nasze oferty z pewnością spełnią
							Twoje oczekiwania.
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
