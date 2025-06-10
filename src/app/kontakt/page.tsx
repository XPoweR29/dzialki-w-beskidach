import { ContactContent } from '@/sections/ContactContent/ContactContent';
import { ContactStart } from '@/sections/ContactStart/ContactStart';
import { Metadata } from 'next';
import React from 'react';

export const schema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'@id': 'https://dzialkiwbeskidziezywieckim.pl/kontakt/#contact',
	url: 'https://dzialkiwbeskidziezywieckim.pl/kontakt',
	name: 'Kontakt | Działki w Beskidzie Żywieckim',
	description:
		'Skontaktuj się z nami – zadzwoń pod +48 504 058 507 lub wypełnij formularz na tej stronie.',
	isPartOf: {
		'@type': 'WebSite',
		'@id': 'https://dzialkiwbeskidziezywieckim.pl/#main',
	},
	potentialAction: [
		{
			'@type': 'CallAction',
			name: 'Zadzwoń do nas',
			target: 'tel:+48504058507',
		},
		{
			'@type': 'SendAction',
			name: 'Wyślij zapytanie',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://dzialkiwbeskidziezywieckim.pl/kontakt#formularz',
				actionPlatform: [
					'https://schema.org/DesktopWebPlatform',
					'https://schema.org/MobileWebPlatform',
				],
			},
		},
	],
};

export const metadata: Metadata = {
	title: 'Kontakt | Działki w Beskidzie Żywieckim',
	description:
		'Skontaktuj się z nami. Zadzwoń lub napisz maila, aby dowiedzieć się więcej o dostępnych działkach.',
	openGraph: {
		title: 'Kontakt | Działki w Beskidzie Żywieckim',
		description:
			'Skontaktuj się z nami. Zadzwoń lub napisz maila, aby dowiedzieć się więcej o dostępnych działkach.',
		url: 'https://dzialkiwbeskidziezywieckim.pl/kontakt',
		siteName: 'Działki w Beskidzie Żywieckim',
		images: [
			{
				url: 'https://dzialkiwbeskidziezywieckim.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'Działki w Beskidzie Żywieckim',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: 'https://dzialkiwbeskidziezywieckim.pl/kontakt',
	},
};

const page = () => {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<ContactStart />
			<ContactContent />
		</>
	);
};

export default page;
