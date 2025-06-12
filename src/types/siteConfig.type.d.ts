export type SiteConfig = {
	baseUrl: string;
	siteName: string;
	contact: {
		phone: string;
		phoneHref: string;
		email: string;
	};

	address: {
		street?: string | null;
		city?: string;
		postalCode?: string;
		countryCode?: string;
		map?: string;
	};

	socials: {
		facebook?: string | null;
		instagram?: string | null;
		gmb?: string | null;
		twitter?: string | null;
		youtube?: string | null;
		linkedin?: string | null;
		tiktok?: string | null;
		pinterest?: string | null;
	};
};
