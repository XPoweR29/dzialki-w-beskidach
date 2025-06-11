import { HomeStart } from '@/sections/HomeStart/HomeStart';
import { HomeOffer } from '@/sections/HomeOffer/HomeOffer';
import { HomePlots } from '@/sections/HomePlots/HomePlots';
import { HomeVideo } from '@/sections/HomeVideo/HomeVideo';
import { HomeMap } from '@/sections/HomeMap/HomeMap';

const schema = {
	'@context': 'https://schema.org',
	'@type': ['WebSite', 'Organization'],
	'@id': 'https://dzialkiwbeskidziezywieckim.pl/#main',
	name: 'Działki w Beskidzie Żywieckim',
	alternateName: 'Atrakcyjne działki na sprzedaż w Beskidzie Żywieckim',
	url: 'https://dzialkiwbeskidziezywieckim.pl',
	logo: 'https://dzialkiwbeskidziezywieckim.pl/logo.jpg',
	image: 'https://dzialkiwbeskidziezywieckim.pl/og_img.jpg',
	description:
		'Szukasz działki w Beskidzie Żywieckim? Sprawdź naszą ofertę i ciesz się inwestycją z malowniczym widokiem!',
	telephone: '+48 504-058-507',
	email: 'kontakt@dzialkiwbeskidziezywieckim.pl',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Pewel Ślemieńska',
		postalCode: '34-331',
		addressCountry: 'PL',
	},
	areaServed: [{ '@type': 'AdministrativeArea', name: 'woj. śląskie' }],
	sameAs: ['https://www.facebook.com/twojadomena'],
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
