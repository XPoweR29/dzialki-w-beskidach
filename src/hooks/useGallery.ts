import { useAppContext } from './useAppContext';

export function useGallery() {
	const { galleryIndex, setGalleryIndex, setIsPreviewOpen, isPreviewOpen } = useAppContext();

	const openPreview = () => setIsPreviewOpen(true);
	const closePreview = () => setIsPreviewOpen(false);

	return {
		galleryIndex,
		setGalleryIndex,
		openPreview,
		closePreview,
		isPreviewOpen
	};
}
