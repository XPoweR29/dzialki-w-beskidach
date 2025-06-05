'use client';

import React from 'react';
import styles from './Footer.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import dev_logo from '../../assets/dev_logo.svg';

export const Footer = () => {
	const pathname = usePathname();
	const currentYear = new Date().getFullYear();

	const handleClick = (e: React.MouseEvent) => {
		if (pathname === '/') {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<footer className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.col1}>
					<Link
						href={'/'}
						className={styles.logo}
						rel='preload'
						onClick={handleClick}
						aria-label='Przejdź do strony głównej'>
						<Image
							src={'/logo_white.png'}
							width={250}
							height={52}
							alt='Działki na sprzedaż w Beskidzie Żywieckim'
							priority={true}
						/>
					</Link>
					<p>
						Działki na sprzedaż w malowniczej okolicy. Idealne pod dom lub
						rekreację.
					</p>
				</div>

				<address className={styles.col2}>
					<a href='tel:+48504058507' className={styles.link}>
						<Icon icon='majesticons:phone' />
						+48 504-058-507
					</a>

					<a href='mailto:example@mail.com' className={styles.link}>
						<Icon icon='f7:envelope-fill' />
						example@mail.com
					</a>

					<a
						href='https://facebook.pl'
						className={styles.link}
						target='_blank'
						rel='noopener noreferrer'>
						<Icon icon='ic:round-facebook' />
						/facebook
					</a>
				</address>

				<div className={styles.col3}>
					<Link href={'/kontakt'} className={styles.link}>
						Kontakt
					</Link>
					<Link href={'/polityka-prywatnosci'} className={styles.link}>
						Polityka prywatności
					</Link>

					<p className={styles.copyright}>
						<span>© {currentYear} Działki w Beskidzie Żywieckim</span>
						<span> Wszelkie prawa zastrzeżone.</span>
					</p>
				</div>
			</Wrapper>

			<div className={styles.dev_sign}>
				<p>Designed & Developed by</p>
				<a
					href='https://webcraft-studio.pl/'
					target='_blank'
					aria-label='strona webcraft-studio'
					title='Zamów własną stronę internetową!'
					rel='noopener noreferrer'>
					<Image
						src={dev_logo}
						alt='Logo Webcraft Studio – profesjonalne projektowanie stron'
					/>
				</a>
			</div>
		</footer>
	);
};
