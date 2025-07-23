import { PlotOffer } from '@/sections/PlotOffer/PlotOffer';
import { PlotStart } from '@/sections/PlotStart/PlotStart';
import { StaticImageData } from 'next/image';
import React from 'react';

import img1 from '../../assets/photos/dzialka2/photo1.webp';
import img2 from '../../assets/photos/dzialka2/photo2.webp';
import img3 from '../../assets/photos/dzialka2/photo3.webp';
import img4 from '../../assets/photos/dzialka2/photo4.webp';
import img5 from '../../assets/photos/dzialka2/photo05.webp';
import img6 from '../../assets/photos/dzialka2/photo06.webp';
import img7 from '../../assets/photos/dzialka2/photo07.webp';
import img8 from '../../assets/photos/dzialka2/photo08.webp';
import img9 from '../../assets/photos/dzialka2/photo09.webp';
import img10 from '../../assets/photos/dzialka2/photo10.webp';
import img11 from '../../assets/photos/dzialka2/photo11.webp';
import img12 from '../../assets/photos/dzialka2/photo12.webp';
import img13 from '../../assets/photos/dzialka2/photo13.webp';
import img14 from '../../assets/photos/dzialka2/photo14.webp';
import img15 from '../../assets/photos/dzialka2/photo15.webp';

import { PlotDescription } from '@/sections/PlotDescription/PlotDescription';
import { PlotOther } from '@/sections/PlotsOther/PlotOther';
import { PlotContact } from '@/sections/PlotContact/PlotContact';
import { siteConfig } from '@/config/site.config';
import { createMetadata } from '@/lib/metadata';

const PLOT_DETAIL: PlotDetails = {
	price: 150000,
	location: 'Gilowice',
	streetAddress: '',
	surface: 2128,
	dimensions: '18 x 115 ',
	destination: 'rolna',
	plotNumber: '8064',
	approach: 'droga asfaltowa / gruntowa 100m',
	media: 'przyłącze prądowe',
	gmPin:
		'https://www.google.com/maps?q=49.694115,19.327038&hl=pl&t=k&z=18&output=embed',
};

const SLUG: string = 'dzialka-rolna-2128m2-gilowice';

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
		name: 'Działka rolna 2128 m² – Gilowice, Beskid Żywiecki',
		description:
			'Działka rolna 2128 m² w Gilowicach z dobrym dojazdem i przyłączem prądowym w cenie. Spokojna lokalizacja w Beskidzie Żywieckim.',
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
			postalCode: '34-322',
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
	title: 'Działka rolna 2128 m² – Gilowice, Beskid Żywiecki',
	description:
		'Działka rolna 2128 m² w Gilowicach z dobrym dojazdem i przyłączem prądowym w cenie. Spokojna lokalizacja w Beskidzie Żywieckim.',
});

const GALLERY: string[] | StaticImageData[] = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8, 
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
];

const page = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<PlotStart
				title='Działka z widokiem na sprzedaż'
				heading={
					<>
						Atrakcyjne miejsce <br /> w Gilowicach
					</>
				}
			/>

			<PlotOffer gallery={GALLERY} details={PLOT_DETAIL} />

			<PlotDescription>
				<p>
					Na sprzedaż widokowa działka rolna 2128 m² w Beskidach – Gilowice.
					Nieruchomość położona w Beskidzie Żywieckim, w ciszy i spokoju od
					zgiełku miasta, dookoła góry i las oraz szlaki turystyczne. Oferta
					sprzedaży dotyczy działki rolnej w kształcie prostokąta o powierzchni
					2128 m² z dostępem do drogi gminnej w miejscowości Gilowice, gmina
					Gilowice, powiat żywiecki.
				</p>
				<p>
					Nieruchomość położona w miejscowości Gilowice, natomiast dojazd i
					dostęp do drogi publicznej, jest od ulicy Świętego Jakuba w Pewli
					Ślemieńskiej. Dojazd droga publiczna, asfaltowa, ostatnie 100 metrów –
					droga polna, nieutwardzona.{' '}
					<strong>
						Wniosek o wykonanie przyłącza prądowego został już złożony – koszt
						przyłącza wliczono w cenę działki.
					</strong>{' '}
					Dodatkowym atutem jest wysokość położenia oraz przepiękne widoki. Masz
					pomysł? Zadzwoń!
				</p>

				<p>
					Działka w MPZP oznaczona symbolem –{' '}
					<strong>
						R – tereny rolnicze oraz dopuszczalna zabudowa zagrodowa
					</strong>
					.
				</p>
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
