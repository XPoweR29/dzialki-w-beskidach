import React from 'react';
import styles from './polityka-ptywatnosci.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { createMetadata } from '@/lib/metadata';

const SLUG = 'polityka-prywatnosci';

export const metadata = createMetadata(
	{
		slug: SLUG,
		title: 'Polityka Prywatności | Działki w Beskidzie Żywieckim',
		description:
			'Dowiedz się, jakie dane zbieramy i w jaki sposób je przetwarzamy. Polityka prywatności serwisu Działki w Beskidzie Żywieckim.',
	},
	{
		robots: { index: false, follow: false },
	}
);

const PrivacyPolicy = () => {
	return (
		<article className={styles.privacy}>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.title}>Polityka Prywatności</h1>

				<p>
					Poniższa Polityka Prywatności określa{' '}
					<strong>
						zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach
						Użytkowników
					</strong>{' '}
					korzystających z Serwisu oraz{' '}
					<strong>
						zasady gromadzenia i przetwarzania danych osobowych Użytkowników
					</strong>
					, które zostały podane przez nich osobiście i dobrowolnie.
				</p>

				<h2>§1 Definicje</h2>
				<ul>
					<li>
						<strong>Serwis</strong> – serwis internetowy „Działki w Beskidzie
						Żywieckim” działający pod adresem{' '}
						<a
							href='https://www.dzialkiwbeskidziezywieckim.pl'
							target='_blank'
							rel='noopener noreferrer'>
							https://www.dzialkiwbeskidziezywieckim.pl
						</a>
						.
					</li>
					<li>
						<strong>Serwis zewnętrzny</strong> – partnerzy i usługodawcy
						współpracujący z Administratorem.
					</li>
					<li>
						<strong>Administrator</strong> – firma „Działki w Beskidzie
						Żywieckim”, Pewel Ślemieńska 34-331, ul. Wiosenna.
					</li>
					<li>
						<strong>Użytkownik</strong> – osoba fizyczna korzystająca z Serwisu.
					</li>
					<li>
						<strong>Urządzenie</strong> – sprzęt, na którym Użytkownik otwiera
						Serwis.
					</li>
					<li>
						<strong>Cookies</strong> – małe pliki tekstowe przechowywane na
						Urządzeniu Użytkownika.
					</li>
					<li>
						<strong>RODO</strong> – Rozporządzenie UE 2016/679.
					</li>
					<li>
						<strong>Dane osobowe</strong> – informacje o zidentyfikowanej lub
						możliwej do zidentyfikowania osobie fizycznej.
					</li>
					<li>
						<strong>Przetwarzanie</strong> – każda operacja na danych osobowych
						(zbieranie, przechowywanie, usuwanie, itp.).
					</li>
					<li>
						<strong>Profilowanie</strong> – zautomatyzowane przetwarzanie danych
						w celu oceny lub prognozy cech osobistych.
					</li>
					<li>
						<strong>Zgoda</strong> – dobrowolne, świadome i jednoznaczne
						wyrażenie woli na przetwarzanie danych.
					</li>
					<li>
						<strong>Naruszenie ochrony danych</strong> – przypadkowe lub
						niezgodne z prawem ujawnienie, utrata lub zniszczenie danych.
					</li>
					<li>
						<strong>Pseudonimizacja</strong> – przetwarzanie w taki sposób, że
						bez dodatkowych danych nie można przypisać do konkretnej osoby.
					</li>
					<li>
						<strong>Anonimizacja</strong> – nieodwracalny proces
						uniemożliwiający identyfikację osoby.
					</li>
				</ul>

				<h2>§2 Inspektor Ochrony Danych</h2>
				<p>
					Administrator nie powołał Inspektora Ochrony Danych. W sprawach
					dotyczących danych osobowych prosimy o kontakt na adres:{' '}
					<a href='mailto:kontakt@dzialkiwbeskidziezywieckim.pl'>
						kontakt@dzialkiwbeskidziezywieckim.pl
					</a>
					.
				</p>

				<h2>§3 Rodzaje Cookies</h2>
				<ul>
					<li>
						<strong>Wewnętrzne</strong> – przez Serwis.
					</li>
					<li>
						<strong>Zewnętrzne</strong> – przez skrypty partnerów (Facebook,
						Google Analytics, Google Maps).
					</li>
					<li>
						<strong>Sesyjne</strong> – usuwane po zamknięciu przeglądarki.
					</li>
					<li>
						<strong>Trwałe</strong> – przechowywane do ręcznego usunięcia.
					</li>
				</ul>

				<h2>§4 Bezpieczeństwo</h2>
				<ul>
					<li>
						Mechanizmy Cookies są częścią przeglądarki i nie pozwalają na
						pobranie danych z innych witryn.
					</li>
					<li>
						Administrator nie ponosi odpowiedzialności za złośliwe
						oprogramowanie na Urządzeniu Użytkownika.
					</li>
				</ul>

				<h2>§5 Cele użycia Cookies</h2>
				<ul>
					<li>Usprawnienie Serwisu.</li>
					<li>Personalizacja treści.</li>
					<li>Statystyki (Google Analytics).</li>
					<li>Usługi społecznościowe.</li>
				</ul>

				<h2>§6 Przetwarzanie danych osobowych</h2>
				<p>Dane osobowe przetwarzane są w celach:</p>
				<ul>
					<li>Realizacji usług elektronicznych.</li>
					<li>Komunikacji z Użytkownikiem.</li>
					<li>Marketingu i remarketingu (za zgodą).</li>
				</ul>

				<h2>§7 Podmioty trzecie</h2>
				<p>
					Administrator korzysta z usług Vercel (hosting), Facebook, Google
					Analytics i Google Maps. Polityki tych usług znajdziesz u nich na
					stronach.
				</p>

				<h2>§8 Twoje prawa</h2>
				<ul>
					<li>
						Prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania.
					</li>
					<li>Prawo przenoszenia danych.</li>
					<li>Prawo sprzeciwu.</li>
					<li>Prawo wniesienia skargi do PUODO.</li>
				</ul>

				<h2>§9 Kontakt</h2>
				<p>
					Kontakt do Administratora:
					<br />
					ul. Wiosenna, 34-331 Pewel Ślemieńska
					<br />
					<a href='mailto:kontakt@dzialkiwbeskidziezywieckim.pl'>
						kontakt@dzialkiwbeskidziezywieckim.pl
					</a>
					<br />
					tel. +48 504 058 507
				</p>
			</Wrapper>
		</article>
	);
};

export default PrivacyPolicy;
