'use client';

import React from 'react';
import styles from './HomeVideo.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import forest_s from '../../assets/images/forest.png';
import forest_xl from '../../assets/images/forest_large.png';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer';

export const HomeVideo = () => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				{/* <div className={styles.videoContainer}>
					<Icon className={styles.icon} icon='octicon:play-24' />
				</div> */}

				<VideoPlayer
					src='/dron_video.mp4'
					poster='/photos/hero_photo.jpg'
				/>

				<h2 className={styles.heading}>Zobacz okolicę z lepszej perspektywy</h2>
				<p className={styles.text}>
					Ujęcia z lotu ptaka pokazują rzeczywisty układ działek i ich
					otoczenie. Zobacz, jak wygląda teren, najbliższe sąsiedztwo i rozległe
					widoki, które oferuje ta lokalizacja.
				</p>
			</Wrapper>

			<Image
				src={breakpoint.lg?forest_xl:forest_s}
				className={styles.image}
				alt=''
				draggable={false}
				aria-hidden
			/>
		</section>
	);
};
