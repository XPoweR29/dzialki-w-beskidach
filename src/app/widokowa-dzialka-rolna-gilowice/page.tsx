import { PlotOffer } from '@/sections/PlotOffer/PlotOffer';
import { PlotStart } from '@/sections/PlotStart/PlotStart';
import { StaticImageData } from 'next/image';
import React from 'react';

import img1 from '../../assets/photos/dzialka3/photo1.webp';
import img2 from '../../assets/photos/dzialka3/photo2.webp';
import img3 from '../../assets/photos/dzialka3/photo3.webp';
import img4 from '../../assets/photos/dzialka3/photo4.webp';
import img5 from '../../assets/photos/dzialka3/photo5.webp';
import img6 from '../../assets/photos/dzialka3/photo6.webp';
import img7 from '../../assets/photos/dzialka3/photo7.webp';
import img8 from '../../assets/photos/dzialka3/photo08.webp';
import img9 from '../../assets/photos/dzialka3/photo09.webp';
import img10 from '../../assets/photos/dzialka3/photo10.webp';
import img11 from '../../assets/photos/dzialka3/photo11.webp';
import img12 from '../../assets/photos/dzialka3/photo12.webp';

import { PlotDescription } from '@/sections/PlotDescription/PlotDescription';
import { PlotOther } from '@/sections/PlotsOther/PlotOther';
import { PlotContact } from '@/sections/PlotContact/PlotContact';
import { siteConfig } from '@/config/site.config';
import { createMetadata } from '@/lib/metadata';

const PLOT_DETAIL: PlotDetails = {
	price: 999000,
	location: 'Gilowice',
	streetAddress: 'Świętego Jakuba',
	surface: 5069,
	dimensions: '53 x 97',
	destination: 'rolna',
	plotNumber: '9557',
	approach: 'droga asfaltowa',
	media: 'prąd - obok działki',
	gmPin:
		'https://www.google.com/maps?q=49.695756,19.334889&hl=pl&t=k&z=18&output=embed',
};

const SLUG: string = 'widokowa-dzialka-rolna-gilowice';

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
		name: 'Działka rolna na sprzedaż – 5069 m², Gilowice, Beskid Żywiecki',
		description:
			'Nieruchomość położona w Beskidzie Żywieckim, w ciszy i spokoju, otoczona górami, lasem i szlakami turystycznymi. Powierzchnia 5069 m², dojazd drogą gminną.',
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
	title:
		'Na sprzedaż widokowa działka rolna 5069 m² – Gilowice, Beskid Żywiecki',
	description:
		'Nieruchomość położona w Beskidzie Żywieckim, w ciszy i spokoju, otoczona górami, lasem i szlakami turystycznymi. Powierzchnia 5069 m², dojazd drogą gminną.',
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
	img12
];

const page = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			
			<PlotStart
				title='Działka na sprzedaż w Gilowicach'
				heading={
					<>
						Inwestycja z widokiem <br /> na góry
					</>
				}
			/>

			<PlotOffer gallery={GALLERY} details={PLOT_DETAIL} />

			<PlotDescription>
				<p>
					Na sprzedaż widokowa działka rolna 5069 m². Nieruchomość położona w
					Beskidzie Żywieckim, w ciszy i spokoju od zgiełku miasta, dookoła góry
					i las oraz szlaki turystyczne. Oferta sprzedaży dotyczy działki rolnej
					w kształcie prostokąta o powierzchni 5069 m² z dostępem do drogi
					gminnej w miejscowości Gilowice, gmina Gilowice, powiat żywiecki.
				</p>

				<p>
					Nieruchomość położona w miejscowości Gilowice, natomiast dojazd i
					dostęp do drogi publicznej, jest od ulicy Świętego Jakuba w Pewli
					Ślemieńskiej. Dojazd droga publiczna, asfaltowa.
				</p>

				<p>
					Dodatkowym atutem jest wysokość położenia, powierzchnia oraz
					przepiękne widoki. <br /> Masz pomysł? Zadzwoń! Działka w MPZP
					oznaczona symbolem – R{' '}
					<strong>
						– tereny rolnicze oraz dopuszczalna zabudowa zagrodowa
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
