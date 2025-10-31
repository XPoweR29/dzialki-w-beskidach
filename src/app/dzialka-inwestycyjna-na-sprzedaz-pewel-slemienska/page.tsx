import { PlotOffer } from '@/sections/PlotOffer/PlotOffer';
import { PlotStart } from '@/sections/PlotStart/PlotStart';
import { StaticImageData } from 'next/image';
import React from 'react';

import img1 from '../../assets/photos/dzialka1/photo01.webp';
import img2 from '../../assets/photos/dzialka1/photo02.webp';
import img3 from '../../assets/photos/dzialka1/photo03.webp';
import img4 from '../../assets/photos/dzialka1/photo04.webp';
import img5 from '../../assets/photos/dzialka1/photo05.webp';
import img6 from '../../assets/photos/dzialka1/photo06.webp';
import img7 from '../../assets/photos/dzialka1/photo07.webp';
import img8 from '../../assets/photos/dzialka1/photo08.webp';
import img9 from '../../assets/photos/dzialka1/photo09.webp';
import img10 from '../../assets/photos/dzialka1/photo10.webp';
import img11 from '../../assets/photos/dzialka1/photo11.webp';
import img12 from '../../assets/photos/dzialka1/photo12.webp';
import img13 from '../../assets/photos/dzialka1/photo13.webp';
import img14 from '../../assets/photos/dzialka1/photo14.webp';
import img15 from '../../assets/photos/dzialka1/photo15.webp';
import img16 from '../../assets/photos/dzialka1/photo16.webp';
import img17 from '../../assets/photos/dzialka1/photo17.webp';
import img18 from '../../assets/photos/dzialka1/photo18.webp';
import img19 from '../../assets/photos/dzialka1/photo19.webp';
import img20 from '../../assets/photos/dzialka1/photo20.webp';
import img21 from '../../assets/photos/dzialka1/photo21.webp';
import img22 from '../../assets/photos/dzialka1/photo22.webp';
import img23 from '../../assets/photos/dzialka1/photo23.webp';
import img24 from '../../assets/photos/dzialka1/photo24.webp';
import img25 from '../../assets/photos/dzialka1/photo25.webp';

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
	destination: '38% (MN), 62% (R)',
	plotNumber: '2794/7, 2794/3',
	approach: 'droga asfaltowa',
	media: 'prąd',
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
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
	img24,
	img25,
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
					Na sprzedaż atrakcyjna działka o łącznej powierzchni{' '}
					<strong>1,0147 ha</strong>, położona w malowniczej miejscowości{' '}
					<strong>Pewel Ślemieńska</strong>, gmina Świnna, powiat żywiecki – w
					samym sercu Beskidu Żywieckiego.
				</p>

				<p>W skład nieruchomości wchodzą dwie działki:</p>
				<ul>
					<li>
						<strong>nr 2794/7</strong> – powierzchnia <strong>9849 m²</strong>
					</li>
					<li>
						<strong>nr 2794/3</strong> – powierzchnia <strong>298 m²</strong>{' '}
						(droga dojazdowa)
					</li>
				</ul>

				<h3 style={{ fontSize: '1.4em', margin: '1em 0' }}>
					Atuty nieruchomości
				</h3>
				<ul>
					<li>
						Położona pod samym lasem, w otoczeniu natury i górskich szlaków
					</li>
					<li>Przepiękne widoki na panoramę Beskidów</li>
					<li>Bezpośredni dojazd asfaltowy</li>
					<li>Prąd w granicy działki</li>
					<li>
						Cisza, spokój i przestrzeń – idealne miejsce na dom lub inwestycję
					</li>
				</ul>

				<h3 style={{ fontSize: '1.4em', margin: '1em 0' }}>
					Potencjał inwestycyjny
				</h3>
				<p>
					Działka objęta jest obowiązującym{' '}
					<strong>
						Miejscowym Planem Zagospodarowania Przestrzennego gminy Świnna
					</strong>{' '}
					(Uchwała Rady Gminy Świnna opublikowana w Dzienniku Urzędowym
					Województwa Śląskiego).
				</p>

				<p>
					Około <strong>38% powierzchni (ok. 3 700 m²)</strong> znajduje się w
					strefie{' '}
					<strong>F.1.MN.42 – zabudowa mieszkaniowa jednorodzinna</strong>,
					natomiast pozostała część –{' '}
					<strong>F.1.R.22 – tereny rolne o charakterze rekreacyjnym</strong>.
				</p>

				<p>Dzięki temu działka doskonale nadaje się pod:</p>
				<ul>
					<li>budowę domów jednorodzinnych lub domków letniskowych,</li>
					<li>realizację mini osiedla z widokiem na góry,</li>
					<li>projekt agroturystyczny, glamping lub pole kamperowe,</li>
					<li>połączenie funkcji mieszkalnej i rekreacyjnej.</li>
				</ul>

				<p>
					To gotowa do inwestycji działka z uchwalonym planem miejscowym,
					położona w wyjątkowym, widokowym miejscu. Idealna dla inwestora,
					dewelopera lub osób marzących o własnym domu w górach.
				</p>

				<p>
					Piękna panorama, świeże powietrze i bliskość natury sprawiają, że to
					również <strong>bezpieczna lokata kapitału.</strong>
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
