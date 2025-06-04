'use client';

import React, { useState } from 'react';
import styles from './PlotGallery.module.scss';
import Image, { StaticImageData } from 'next/image';
import { ThumbSwiper } from '../ThumbSwiper/ThumbSwiper';
import { useGallery } from '@/hooks/useGallery';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAppContext } from '@/hooks/useAppContext';
import { PhotoPreview } from '../PhotoPreview/PhotoPreview';
import { createPortal } from 'react-dom';

interface Props {
	slides: string[] | StaticImageData[];
}

export const PlotGallery: React.FC<Props> = ({ slides }) => {
	const { galleryIndex, isPreviewOpen, openPreview } = useGallery();

	return (
		<div className={styles.gallery}>
			<div className={styles.previewContainer} onClick={openPreview}>
				<Image
					src={slides[galleryIndex]}
					alt={'Atrakcyjna działka na sprzedaż'}
					fill
					priority={true}
				/>
				<Icon className={styles.icon} icon='bi:zoom-in' />
			</div>

			<ThumbSwiper slides={slides} />

			{isPreviewOpen && createPortal(<PhotoPreview slides={slides}/>, document.body)}
		</div>
	);
};
