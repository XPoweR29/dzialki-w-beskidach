'use client';

import React from 'react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { useAppContext } from '@/hooks/useAppContext';
import { menuLinks } from '@/assets/data/navLinks';
import Image from 'next/image';
import iconPhone from '../../assets/icons/icon_phone.svg';

export const MobileMenu = () => {
	const { setMobileMenuShown } = useAppContext();

	const handleClick = () => {
		setTimeout(() => {
			setMobileMenuShown(false);
		}, 10);
	};
	return (
		<nav>
			<ul className={styles.mobileMenu}>
				{menuLinks.map((link) => (
					<li key={link.id}>
						<Link
							href={link.href}
							className={styles.link}
							onClick={handleClick}>
							{link.name}
						</Link>
					</li>
				))}
				<a
					href='tel:504058507'
					className={styles.phoneButton}
					aria-label='Zadzwoń pod numer 504 058 507'>
					<Image src={iconPhone} alt='' aria-hidden draggable={false} />
					504 058 507
				</a>
			</ul>
		</nav>
	);
};
