import { Barlow_Condensed, Montserrat } from 'next/font/google';
import '../sass/globals.scss';
import { ContextProvider } from '../contexts/app.context';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { createMetadata } from '@/lib/metadata';

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

export const metadata = createMetadata({
		title: 'Działki na sprzedaż w Beskidzie Żywieckim – atrakcyjna inwestycja',
		description:
			'Szukasz działki w Beskidzie Żywieckim? Sprawdź naszą ofertę i ciesz się inwestycją z malowniczym widokiem!',
});

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
