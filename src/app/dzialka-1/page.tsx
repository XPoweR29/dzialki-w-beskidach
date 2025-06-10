import { PlotOffer } from '@/sections/PlotOffer/PlotOffer';
import { PlotStart } from '@/sections/PlotStart/PlotStart';
import { StaticImageData } from 'next/image';
import React from 'react';

import img1 from '../../assets/photos/plot1_gallery/photo_1.jpg';
import img2 from '../../assets/photos/plot1_gallery/photo_2.jpg';
import img3 from '../../assets/photos/plot1_gallery/photo_3.jpg';
import img4 from '../../assets/photos/plot1_gallery/photo_1.jpg';
import img5 from '../../assets/photos/plot1_gallery/photo_2.jpg';
import img6 from '../../assets/photos/plot1_gallery/photo_3.jpg';
import { PlotDescription } from '@/sections/PlotDescription/PlotDescription';
import { PlotOther } from '@/sections/PlotsOther/PlotOther';
import { PlotContact } from '@/sections/PlotContact/PlotContact';
import { Metadata } from 'next';

export const schema = {
	'@context': 'https://schema.org',
	'@type': 'Offer',
	'@id': 'https://dzialkiwbeskidziezywieckim.pl/dzialka-1/#offer',
	url: 'https://dzialkiwbeskidziezywieckim.pl/dzialka-1/',
	isPartOf: {
		'@type': 'WebSite',
		'@id': 'https://dzialkiwbeskidziezywieckim.pl/#main',
	},
	seller: {
		'@type': 'Organization',
		'@id': 'https://dzialkiwbeskidziezywieckim.pl/#main',
	},
	itemOffered: {
		'@type': 'Land',
		name: 'Działka budowlana 1200 m² – Pewel Ślemieńska',
		description: 'Piękna działka 1200 m² z mediami przy granicy.',
		landArea: {
			'@type': 'QuantitativeValue',
			value: 1200,
			unitCode: 'M2',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '49.600000',
			longitude: '19.100000',
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'ul. Główna 1',
			addressLocality: 'Pewel Ślemieńska',
			postalCode: '34-331',
			addressCountry: 'PL',
		},
	},
	priceSpecification: {
		'@type': 'UnitPriceSpecification',
		price: '129000',
		priceCurrency: 'PLN',
		unitCode: 'E62',
	},
	availability: 'https://schema.org/InStock',
};

export const metadata: Metadata = {
	title:
		'Działka budowlana 1000 m² – Pewel Ślemieńska | Działki w Beskidzie Żywieckim',
	description:
		'Działka budowlana 1000 m² w Pewel Ślemieńskiej, media przy granicy, dojazd drogą utwardzoną. Idealna inwestycja z widokiem na góry.',

	openGraph: {
		title:
			'Działka budowlana 1000 m² – Pewel Ślemieńska | Działki w Beskidzie Żywieckim',
		description:
			'Działka budowlana 1000 m² w Pewel Ślemieńskiej, media przy granicy, dojazd drogą utwardzoną. Idealna inwestycja z widokiem na góry.',
		url: 'https://dzialkiwbeskidziezywieckim.pl/dzialka-1',
		siteName: 'Działki w Beskidzie Żywieckim',
		images: [
			{
				url: 'https://pro-wnetrze.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'Działka budowlana 1000 m² w Pewel Ślemieńskiej',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: 'https://dzialkiwbeskidziezywieckim.pl/dzialka-1',
	},
};

const GALLERY: string[] | StaticImageData[] = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
];

const PLOT_DETAIL: PlotDetails = {
	price: 119000,
	location: 'Pewel Ślemieńska',
	streetAddress: 'Przykładowa 1',
	surface: 1100,
	dimensions: '25 x 44',
	destination: 'budowlana',
	plotNumber: '123/2',
	approach: 'droga utwardzona',
	media: 'prąd',
};

const page = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<PlotStart
				title='Działka #1'
				heading={
					<>
						Działka pod lasem <br /> w Beskidach
					</>
				}
			/>

			<PlotOffer gallery={GALLERY} details={PLOT_DETAIL} />

			<PlotDescription>
				<p>
					Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
					aute iure reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim
					ad minim veniam, quis nostrum exercitationem ullam corporis suscipit
					laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
					tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrum exercitationem ullam corporis suscipit
					laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
					dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur.{' '}
				</p>
			</PlotDescription>

			<PlotOther
				heading={<h2>Zobacz pozostałe działki</h2>}
				text='Każda z nich to świetna lokalizacja z widokiem na góry. Zobacz, która działka najlepiej spełnia Twoje oczekiwania.'
			/>

			<PlotContact />
		</>
	);
};

export default page;
