import React from 'react';
import styles from './Parameters.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Wrapper } from '../Wrapper/Wrapper';

interface Props {
	className?: string;
}
export const Parameters = ({ className }: Props) => {
	return (
		<div className={`${styles.parameters} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.item}>
					<Icon icon='gis:layer' />
					<p>Powierzchnia:</p>
					<span>1420 m²</span>
				</div>

				<div className={styles.item}>
					<Icon icon='fluent:slide-size-20-filled' />
					<p>Wymiary:</p>
					<span>16 x 55m</span>
				</div>

				<div className={styles.item}>
					<Icon icon='basil:document-solid' />
					<p>Przeznaczenie:</p>
					<span>budowlana</span>
				</div>

				<div className={styles.item}>
					<Icon icon='tabler:number' />
					<p>Nr. działki:</p>
					<span>123/2</span>
				</div>

				<div className={styles.item}>
					<Icon icon='ix:road-filled' />
					<p>Dojazd:</p>
					<span>droga utwardzona</span>
				</div>

				<div className={styles.item}>
					<Icon icon='fluent:flash-20-filled' />
					<p>Media:</p>
					<span>prąd</span>
				</div>
			</Wrapper>
		</div>
	);
};
