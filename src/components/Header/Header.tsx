'use client';

import React from 'react';
import styles from './Header.module.scss';
import { LinkBar } from '../Nav/Nav';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import Image from 'next/image';
import { useAppContext } from '@/hooks/useAppContext';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } = useAppContext();
	const pathname = usePathname();

	const handleClick = (e: React.MouseEvent) => {
		if(pathname ==="/") {
			e.preventDefault();
			window.scrollTo({top: 0, behavior: 'smooth'})
		}
	};

	return (
		<nav
			className={`${styles.nav} ${
				mobileMenuShown ? styles['activeMobileMenu'] : ''
			}`}>
			<div className={styles.navbar_container}>
				<Link href={'/'} className={styles.logo} onClick={handleClick}>
					<Image
						src={'/logo.png'}
						width={250}
						height={52}
						alt='Działi na sprzedaż w Beskidzie Żywieckim'
						onClick={() => console.log('Scroll to top mordo!')}
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
		</nav>
	);
};
