interface AppContextType {
	breakpoint: Breakpoints;

	galleryIndex: number;
	setGalleryIndex: React.Dispatch<React.SetStateAction<number | null>>;

	mobileMenuShown: boolean;
	setMobileMenuShown: React.Dispatch<React.SetStateAction<boolean>>;

	isPreviewOpen: boolean;
	setIsPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
