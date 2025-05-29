'use client';
import React from 'react';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { menuLinks } from '@/assets/data/navLinks';
import Image from 'next/image';
import iconPhone from '../../assets/icons/icon_phone.svg';

export const LinkBar = () => {
	return (
		<ul className={styles.linkbar}>
			{menuLinks.map((link) => (
				<li key={link.id} className={styles.menuItem}>
					<Link href={link.href} className={styles.link}>
						{link.name}
					</Link>
				</li>
			))}
			<li>
				<a
					href='tel:504058507'
					className={styles.phoneButton}
					aria-label='Zadzwoń pod numer 504 058 507'>
					<Image src={iconPhone} alt='' aria-hidden draggable={false} />
					504 058 507
				</a>
			</li>
		</ul>
	);
};
