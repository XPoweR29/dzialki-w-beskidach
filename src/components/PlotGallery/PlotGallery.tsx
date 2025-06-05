'use client';

import React from 'react';
import styles from './PlotGallery.module.scss';
import Image, { StaticImageData } from 'next/image';
import { ThumbSwiper } from '../ThumbSwiper/ThumbSwiper';
import { useGallery } from '@/hooks/useGallery';
import { Icon } from '@iconify/react/dist/iconify.js';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Props {
	slides: string[] | StaticImageData[];
}

export const PlotGallery: React.FC<Props> = ({ slides }) => {
	const { galleryIndex, setGalleryIndex, isPreviewOpen, openPreview, closePreview } = useGallery();

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
			
			<Lightbox
				open={isPreviewOpen}
				close={closePreview}
				index={galleryIndex ?? 0}
				slides={slides.map((img) => ({
					src: typeof img === 'string' ? img : img.src,
				}))}
			/>
		</div>
	);
};
