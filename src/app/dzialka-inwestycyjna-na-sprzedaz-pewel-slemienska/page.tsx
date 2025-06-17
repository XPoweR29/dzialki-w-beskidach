import { PlotOffer } from '@/sections/PlotOffer/PlotOffer';
import { PlotStart } from '@/sections/PlotStart/PlotStart';
import { StaticImageData } from 'next/image';
import React from 'react';

import img1 from '../../assets/photos/dzialka1/photo_1.jpg';
import img2 from '../../assets/photos/dzialka1/photo_2.jpg';
import img3 from '../../assets/photos/dzialka1/photo_3.jpg';
import img4 from '../../assets/photos/dzialka1/photo_1.jpg';
import img5 from '../../assets/photos/dzialka1/photo_2.jpg';
import img6 from '../../assets/photos/dzialka1/photo_3.jpg';

import { PlotDescription } from '@/sections/PlotDescription/PlotDescription';
import { PlotOther } from '@/sections/PlotsOther/PlotOther';
import { PlotContact } from '@/sections/PlotContact/PlotContact';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site.config';

const PLOT_DETAIL: PlotDetails = {
	price: 1116170,
	location: 'Pewel Ślemieńska',
	streetAddress: 'Krakowska',
	surface: 10147,
	dimensions: '42 x 236',
	destination: 'rolna',
	plotNumber: '2794/7, 2794/3',
	approach: 'droga asfaltowa',
	media: 'prąd, woda i kanalizacja ok. 70m',
};

const SLUG: string = 'dzialka-inwestycyjna-na-sprzedaz-pewel-slemienska';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Offer',
	'@id': `${siteConfig.baseUrl}/${SLUG}/#offer`,
	url: `${siteConfig.baseUrl}/${SLUG}`,
	isPartOf: {
		'@type': 'WebSite',
		'@id': `${siteConfig.baseUrl}/#main`,
	},
	seller: {
		'@type': 'Organization',
		'@id': `${siteConfig.baseUrl}/#main`,
	},
	itemOffered: {
		'@type': 'Land',
		name: 'Nieruchomość o powierzchni 1ha, pod lasem w Beskidach | Pewel Ślemieńska',
		description:
			'Nieruchomość inwestycyjna położona w Beskidzie Żywieckim, w ciszy i spokoju od zgiełku miasta, dookoła góry i las oraz szlaki turystyczne.',
		landArea: {
			'@type': 'QuantitativeValue',
			value: PLOT_DETAIL.surface,
			unitCode: 'M2',
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: `ul. ${PLOT_DETAIL.streetAddress}`,
			addressLocality: PLOT_DETAIL.location,
			addressRegion: 'Śląskie',
			postalCode: '34-331',
			addressCountry: 'PL',
		},
	},
	priceSpecification: {
		'@type': 'UnitPriceSpecification',
		price: PLOT_DETAIL.price,
		priceCurrency: 'PLN',
		unitCode: 'E62',
	},
	availability: 'https://schema.org/InStock',
};

export const metadata = createMetadata({
	slug: SLUG,
	title:
		'Nieruchomość o powierzchni 1ha, pod lasem w Beskidach | Pewel Ślemieńska',
	description:
		'Nieruchomość inwestycyjna położona w Beskidzie Żywieckim, w ciszy i spokoju od zgiełku miasta, dookoła góry i las oraz szlaki turystyczne.',
});

const GALLERY: string[] | StaticImageData[] = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
];

const page = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<PlotStart
				title='Atrakcyjna inwestycja'
				heading={
					<>
						Działka pod lasem <br /> w Beskidach
					</>
				}
			/>

			<PlotOffer gallery={GALLERY} details={PLOT_DETAIL} />

			<PlotDescription>
				<p>
					Oferta sprzedaży dotyczy dwóch działek rolnych w kształcie prostokąta
					o łącznej powierzchni 10147 m² z dostępem do drogi gminnej – ulica
					Krakowska w miejscowości Pewel Ślemieńska, gmina Świnna, powiat
					żywiecki.
				</p>

				<ul>
					<li>Działka nr: 2794/7 – powierzchnia 9849 m²</li>
					<li>Działka nr: 2794/3 – powierzchnia 298 m² (droga dojazdowa)</li>
				</ul>

				<p>
					Działka posiada ogromy potencjał inwestycyjny, ze względu na
					położenie, gdyż leży pod samym lasem w Beskidach, dookoła też szlaki
					turystyczne oraz przepiękne widoki. Aktualnie działka rolna, natomiast{' '}
					<strong>
						aktualnie w gminie Świnna trwa zmiana MPZP i w nowym planie około
						30% będzie zmienione na część budowlaną – zabudowa mieszkaniowa
						jednorodzinna – MN
					</strong>
					. Zmiana statusu pozwoli nowemu inwestorowi na budowę kilku domów
					jednorodzinnych lub domków letniskowych, idealnie nadaję się na budowę
					domków pod wynajem, mini osiedle lub pole kempingowe, czy kamperowe.
					<br />
					MASZ POMYSŁ NA BIZNES ? – ZADZWOŃ!!!
				</p>

				<p>
					Prąd znajduje się bezpośrednio obok działki, natomiast woda oraz
					kanalizacja gminna dostępne są w drodze głównej – ul. Krakowskiej, w
					odległości około 70 metrów od granicy działki.
				</p>

				<strong>
					Działka w MPZP oznaczona symbolem – R – tereny rolnicze oraz
					dopuszczalna zabudowa zagrodowa, natomiast w nowym MPZP – 30%
					zmienione na – MN – tereny zabudowy mieszkaniowej jednorodzinnej.
				</strong>
				<br />
				<p>
					Więcej informacji udzielę telefonicznie.
					<br /> Zapraszam do kontaku.
				</p>
			</PlotDescription>

			<PlotOther
				heading={<h2>Zobacz pozostałe działki</h2>}
				text='Każda z nich to świetna lokalizacja z widokiem na góry. Zobacz, która działka najlepiej spełnia Twoje oczekiwania.'
			/>

			<PlotContact mapLocation={PLOT_DETAIL.gmPin} />
		</>
	);
};

export default page;
