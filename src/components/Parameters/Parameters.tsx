import React from 'react';
import styles from './Parameters.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Wrapper } from '../Wrapper/Wrapper';

interface Props {
	className?: string;
	details: PlotDetails
}
export const Parameters = ({ className, details }: Props) => {
	return (
		<div className={`${styles.parameters} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.item}>
					<Icon icon='gis:layer' />
					<p>Powierzchnia:</p>
					<span>{`${details.surface} m²`}</span>
				</div>

				<div className={styles.item}>
					<Icon icon='fluent:slide-size-20-filled' />
					<p>Wymiary:</p>
					<span>{`${details.dimensions}m`}</span>
				</div>

				<div className={styles.item}>
					<Icon icon='basil:document-solid' />
					<p>Przeznaczenie:</p>
					<span>{details.destination}</span>
				</div>

				<div className={styles.item}>
					<Icon icon='tabler:number' />
					<p>Nr. działki:</p>
					<span>{details.plotNumber}</span>
				</div>

				<div className={styles.item}>
					<Icon icon='ix:road-filled' />
					<p>Dojazd:</p>
					<span>{details.approach}</span>
				</div>

				<div className={styles.item}>
					<Icon icon='fluent:flash-20-filled' />
					<p>Media:</p>
					<span>{details.media}</span>
				</div>
			</Wrapper>
		</div>
	);
};
