import React, { useRef } from 'react';
import styles from './PlotSwiper.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PlotCard } from '../PlotCard/PlotCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { SwiperButtons } from '../SwiperButtons/SwiperButtons';
import { offers } from '@/assets/data/offers';
import { usePathname } from 'next/navigation';

export const PlotSwiper = () => {
	const pathname = usePathname();
	const currentSlug = pathname.split('/')[1];
	const swiperRef = useRef<SwiperClass | null>(null);
	const plots = offers.filter((plot) => plot.pageSlug !== currentSlug)

	return (
		<>
			<Swiper
				className={styles.swiper}
				spaceBetween={50}
				slidesPerView={1}
				breakpoints={
					{
						768: { slidesPerView: 2, spaceBetween: 50 },
						992: { slidesPerView: 3, spaceBetween: 'auto' },
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
							pricePerM={plot.pricePerM}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<SwiperButtons className={styles.swiperButton} swiperRef={swiperRef} />
		</>
	);
};
