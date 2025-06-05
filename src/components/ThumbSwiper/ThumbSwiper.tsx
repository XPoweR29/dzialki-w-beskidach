'use client';

import React, { useRef } from 'react';
import styles from './ThumbSwiper.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image, { StaticImageData } from 'next/image';
import { useGallery } from '@/hooks/useGallery';
import { SwiperButtons } from '../SwiperButtons/SwiperButtons';
import { Space_Grotesk } from 'next/font/google';

interface Props {
	slides: string[] | StaticImageData[];
}

export const ThumbSwiper = ({ slides }: Props) => {
	const { setGalleryIndex } = useGallery();
	const swiperRef = useRef<SwiperClass | null>(null);

	return (
		<div className={styles.container}>
			<Swiper
				className={styles.thumbSwiper}
				spaceBetween={10}
				slidesPerView={3}
				onSwiper={(swiper) => swiperRef.current = swiper }>
				{slides.map((url, i) => (
					<SwiperSlide
						className={styles.thumb}
						onClick={() => setGalleryIndex(i)}
						key={i}>
						<Image src={url} alt={`Miniatura ${i + 1}`} fill />
					</SwiperSlide>
				))}
			</Swiper>
			<SwiperButtons className={styles.buttons} swiperRef={swiperRef}/>
		</div>
	);
};
