'use client';

import React from 'react';
import styles from './PlotOffer.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Parameters } from '@/components/Parameters/Parameters';
import { PlotGallery } from '@/components/PlotGallery/PlotGallery';
import { StaticImageData } from 'next/image';
import { useBreakpoints } from '@/hooks/useBreakpoint';

interface Props {
	gallery: string[] | StaticImageData[];
	details: PlotDetails;
}
export const PlotOffer = ({ gallery, details }: Props) => {
	const { breakpoint } = useBreakpoints();

	const pricePerM2 = Math.round(details.price/details.surface)

	return (
		<section className={styles.section}>
			<Wrapper>
				<Link href={'/#dzialki'} className={styles.backLink}>
					<Icon icon='fluent-mdl2:back' className={styles.icon} />
					Powrót
				</Link>
			</Wrapper>

			<Wrapper className={styles.wrapper}>
				<div className={styles.plotInfo}>
					<div className={styles.header}>
						<div className={styles.container}>
							<p className={styles.price}>{`${details.price.toLocaleString()} zł`}</p>
							<span>{`${pricePerM2} zł/m²`}</span>
						</div>
						<div className={styles.location}>
							<Icon icon='mdi:location' className={styles.icon} />
							<span>{`${details.location}${details.streetAddress?`, ul. ${details.streetAddress}`:''}`}</span>
						</div>
					</div>

					{!breakpoint.lg && <PlotGallery slides={gallery} />}

					<Parameters className={styles.parameters}  details={details}/>

					<a
						href='tel:+48504058507'
						className={styles.phoneButton}
						aria-label='Zadzwoń pod numer 504 058 507'>
						<Icon icon='ri:phone-fill' className={styles.icon} />
						504 058 507
					</a>
				</div>

				{breakpoint.lg && <PlotGallery slides={gallery} />}
			</Wrapper>


		</section>
	);
};
