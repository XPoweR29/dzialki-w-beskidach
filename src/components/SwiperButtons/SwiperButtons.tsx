'use client';
import React, { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import styles from './SwiperButtons.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
	swiperRef: React.MutableRefObject<SwiperType | null>;
	className?: string;
	disableControl?: boolean;
}
export const SwiperButtons = ({
	swiperRef,
	className,
	disableControl = true,
}: Props) => {
	const [slideStart, setSlideStart] = useState(true);
	const [slideEnd, setSlideEnd] = useState(false);
	const [hideButtons, setHideButtons] = useState(false);

	useEffect(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;

		const checkButtonsVisiblility = () => {
			const totalSlides = swiper.slides.length;
			const perView = Number(swiper.params.slidesPerView);
			if (totalSlides <= perView) {
				setHideButtons(true);
			} else {
				setHideButtons(false);
			}
		};

		const checkSlideState = () => {
			setSlideStart(swiper.isBeginning);
			setSlideEnd(swiper.isEnd);
		};

		checkButtonsVisiblility();
		checkSlideState();

		swiper.on('slideChange', checkSlideState);
		swiper.on('resize', checkButtonsVisiblility);
		swiper.on('breakpoint', checkButtonsVisiblility);

		return () => {
			swiper.off('slideChange', checkSlideState);
			swiper.off('resize', checkButtonsVisiblility);
			swiper.off('breakpoint', checkButtonsVisiblility);
		};
	}, [swiperRef]);

	if (hideButtons) return null;

	return (
		<div className={`${styles.swiperBtns} ${className}`}>
			<button
				className={`${styles.prev} ${
					disableControl && slideStart ? styles.disabled : ''
				}`}
				onClick={() => swiperRef.current?.slidePrev()}
				aria-label='Poprzedni slajd'>
				<Icon icon='raphael:arrowleft' />
			</button>
			<button
				className={`${styles.next} ${
					disableControl && slideEnd ? styles.disabled : ''
				}`}
				onClick={() => swiperRef.current?.slideNext()}
				aria-label='Następny slajd'>
				<Icon icon='raphael:arrowright' />
			</button>
		</div>
	);
};
