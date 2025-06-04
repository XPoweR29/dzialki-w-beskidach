import React, { useEffect } from 'react';
import styles from './PhotoPreview.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useGallery } from '@/hooks/useGallery';
import { Wrapper } from '../Wrapper/Wrapper';
import Image, { StaticImageData } from 'next/image';

interface Props {
	slides: string[] | StaticImageData[];
}
export const PhotoPreview = ({ slides }: Props) => {
	const { closePreview, galleryIndex, isPreviewOpen, setGalleryIndex } =
		useGallery();

	const showPrev = () => {
		if (galleryIndex > 0) {
			setGalleryIndex(galleryIndex - 1);
		}
	};
	const showNext = () => {
		if (galleryIndex < slides.length - 1) {
			setGalleryIndex(galleryIndex + 1);
		}
	};

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (!isPreviewOpen) return;
			if (e.key === 'Escape') {
				closePreview();
			} else if (e.key === 'ArrowLeft') {
				showPrev();
			} else if (e.key === 'ArrowRight') {
				showNext();
			}
		};
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [galleryIndex, isPreviewOpen]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);

	return (
		<div className={styles.container}>
			<button className={styles.closeBtn} onClick={closePreview} aria-label='Zamknij podgląd'>
				<Icon icon='mingcute:close-fill' />
			</button>

			<div className={styles.navButtons}>
				<button 
          className={styles.prev}
          onClick={showPrev}
          aria-label='Poprzednie zdjęcie'
        >
					<Icon icon='raphael:arrowleft' />
				</button>

				<button 
          className={styles.next}
          onClick={showNext}
          aria-label='Następne zdjęcie'
        >
					<Icon icon='raphael:arrowright' />
				</button>
			</div>

			<div className={styles.imageContainer}>
				<Image src={slides[galleryIndex]} alt='' draggable={false} fill />
			</div>
		</div>
	);
};
