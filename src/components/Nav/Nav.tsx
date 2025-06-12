'use client';
import React from 'react';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { menuLinks } from '@/assets/data/navLinks';
import Image from 'next/image';
import iconPhone from '../../assets/icons/icon_phone.svg';
import { siteConfig } from '@/config/site.config';

export const LinkBar = () => {
	return (
		<nav>
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
						href={`tel:${siteConfig.contact.phoneHref}`}
						className={styles.phoneButton}
						aria-label={`Zadzwoń pod numer ${siteConfig.contact.phone}`}>
						<Image src={iconPhone} alt='' aria-hidden draggable={false} />
						{siteConfig.contact.phone}
					</a>
				</li>
			</ul>
		</nav>
	);
};
