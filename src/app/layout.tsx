import type { Metadata } from 'next';
import { Barlow_Condensed, Montserrat } from 'next/font/google';
import '../sass/globals.scss';
import { ContextProvider } from '../contexts/app.context';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const mainFont = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-montserrat',
});

const headingFont = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-barlow',
});

export const metadata: Metadata = {
	title: 'Działki na sprzedaż w Beskidzie Żywieckim – atrakcyjna inwestycja',
	description:
		'Szukasz działki w Beskidzie Żywieckim? Sprawdź naszą ofertę i ciesz się inwestycją z malowniczym widokiem!',

	openGraph: {
		title: 'Działki na sprzedaż w Beskidzie Żywieckim – atrakcyjna inwestycja',
		description:
			'Szukasz działki w Beskidzie Żywieckim? Sprawdź naszą ofertę i ciesz się inwestycją z malowniczym widokiem!',
		url: 'https://dzialkiwbeskidziezywieckim.pl',
		siteName: 'Działki w Beskidzie Żywieckim',
		images: [
			{
				url: 'https://pro-wnetrze.pl/og_img.jpg',
				width: 1200,
				height: 630,
				alt: 'Beskid Żywiecki - działki na sprzedaż',
			},
		],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: 'https://dzialkiwbeskidziezywieckim.pl/',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl' className={`${mainFont.variable} ${headingFont.variable}`}>
			<body className={mainFont.className}>
				<ContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster />
				</ContextProvider>
			</body>
		</html>
	);
}
