import { siteConfig } from '@/config/site.config';
import { createMetadata } from '@/lib/metadata';
import { ContactContent } from '@/sections/ContactContent/ContactContent';
import { ContactStart } from '@/sections/ContactStart/ContactStart';
import { Metadata } from 'next';
import React from 'react';

const SLUG = 'kontakt';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'@id': `${siteConfig.baseUrl}/${SLUG}/#contact`,
	url: `${siteConfig.baseUrl}/${SLUG}`,
	name: 'Kontakt | Działki w Beskidzie Żywieckim',
	description:
		'Skontaktuj się z nami – zadzwoń pod +48 504 058 507 lub wypełnij formularz na tej stronie.',
	isPartOf: {
		'@type': 'WebSite',
		'@id': `${siteConfig.baseUrl}/#main`,
	},
	potentialAction: [
		{
			'@type': 'CallAction',
			name: 'Zadzwoń do nas',
			target: `tel:${siteConfig.contact.phoneHref}`,
		},
		{
			'@type': 'SendAction',
			name: 'Wyślij zapytanie',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${siteConfig.baseUrl}/${SLUG}#formularz`,
				actionPlatform: [
					'https://schema.org/DesktopWebPlatform',
					'https://schema.org/MobileWebPlatform',
				],
			},
		},
	],
};

export const metadata = createMetadata({
	slug: SLUG,
	title: 'Kontakt | Działki w Beskidzie Żywieckim',
	description:
		'Skontaktuj się z nami. Zadzwoń lub napisz maila, aby dowiedzieć się więcej o dostępnych działkach.',
});


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
