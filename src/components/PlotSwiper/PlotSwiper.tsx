import React, { useRef } from 'react';
import styles from './PlotSwiper.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PlotCard } from '../PlotCard/PlotCard';

import cardImg from '../../assets/photos/dzialka1/card_image.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { SwiperButtons } from '../SwiperButtons/SwiperButtons';

const plots: PlotCard[] = [
	{
		cardImg: cardImg,
		title: 'Działka #1',
		surface: '14,2 a',
		destination: 'budowlana',
		location: 'Pewel Ślemieńska',
		pageSlug: 'dzialka-1',
	},
	{
		cardImg: cardImg,
		title: 'Działka #2',
		surface: '14,2 a',
		destination: 'budowlana',
		location: 'Pewel Ślemieńska',
		pageSlug: 'dzialka-2',
	},
	{
		cardImg: cardImg,
		title: 'Działka #3',
		surface: '14,2 a',
		destination: 'budowlana',
		location: 'Pewel Ślemieńska',
		pageSlug: 'dzialka-3',
	},
];

export const PlotSwiper = () => {
	const swiperRef = useRef<SwiperClass | null>(null);

	return (
		<>
			<Swiper
				className={styles.swiper}
				spaceBetween={50}
				slidesPerView={1}
				breakpoints={
					{
						768: { slidesPerView: 2, spaceBetween: 50 },
						992: { slidesPerView: 3, spaceBetween: 40 },
					}
				}
				modules={[Navigation]}
				watchOverflow={true}
				onSwiper={(swiper) => (swiperRef.current = swiper)}>
				{plots.map((plot) => (
					<SwiperSlide className={styles.slide} key={plot.pageSlug}>
						<PlotCard
							cardImg={plot.cardImg}
							title={plot.title}
							surface={plot.surface}
							destination={plot.destination}
							location={plot.location}
							pageSlug={plot.pageSlug}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<SwiperButtons className={styles.swiperButton} swiperRef={swiperRef} />
		</>
	);
};
