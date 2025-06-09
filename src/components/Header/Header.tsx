'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import { LinkBar } from '../Nav/Nav';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import Image from 'next/image';
import { useAppContext } from '@/hooks/useAppContext';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../assets/images/logo.png';

export const Header = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } = useAppContext();
	const [showNav, setShowNav] = useState(true);
	const pathname = usePathname();
	const prevScrollPos = useRef(0);

	const handleClick = (e: React.MouseEvent) => {
		if (pathname === '/') {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollPos.current > currentScrollPos) {
				setShowNav(true);
			} else {
				setShowNav(false);
				setMobileMenuShown(false);
			}

			prevScrollPos.current = currentScrollPos;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [setMobileMenuShown]);

	return (
		<header className=
			{`${styles.header} ${mobileMenuShown ? styles['activeMobileMenu'] : ''} ${!showNav ? styles['header--hidden']:''}`}
			>
			<div className={styles.navbar_container}>
				<Link href={'/'} className={styles.logo} onClick={handleClick} rel='preload'>
					<Image
						src={logo}
						width={250}
						height={52}
						alt='Działki na sprzedaż w Beskidzie Żywieckim'
						priority
					/>
				</Link>

				{breakpoint.lg ? (
					<LinkBar />
				) : (
					<BurgerBtn
						className={styles.burgerBtn}
						mobileMenuShown={mobileMenuShown}
						toggleMenu={setMobileMenuShown}
					/>
				)}

				{mobileMenuShown && <MobileMenu />}
			</div>
		</header>
	);
};
