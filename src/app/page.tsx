import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomeOffer } from '@/sections/HomeOffer/HomeOffer';
import { HomePlots } from '@/sections/HomePlots/HomePlots';
import { HomeVideo } from '@/sections/HomeVideo/HomeVideo';
import { HomeMap } from '@/sections/HomeMap/HomeMap';
import { siteConfig } from '@/config/site.config';

const schema = {
	'@context': 'https://schema.org',
	'@type': ['WebSite', 'Organization'],
	'@id': `${siteConfig.baseUrl}/#main`,
	name: siteConfig.siteName,
	description:
		'Szukasz działki w Beskidzie Żywieckim? Sprawdź naszą ofertę i ciesz się inwestycją z malowniczym widokiem!',
	alternateName: 'Atrakcyjne działki na sprzedaż w Beskidzie Żywieckim',
	url: `${siteConfig.baseUrl}`,
	logo: `${siteConfig.baseUrl}/logo.jpg`,
	image: `${siteConfig.baseUrl}/og_img.jpg`,
	telephone: siteConfig.contact.phoneHref,
	email: siteConfig.contact.email,
	address: {
		'@type': 'PostalAddress',
		addressLocality: siteConfig.address.city,
		postalCode: siteConfig.address.postalCode,
		addressCountry: 'PL',
	},
	areaServed: [{ '@type': 'AdministrativeArea', name: 'woj. śląskie' }],
	sameAs: Object.values(siteConfig.socials).filter(Boolean)
};

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<HomeStart />
			<HomeOffer />
			<HomePlots />
			<HomeVideo />
			<HomeMap />
		</>
	);
}
