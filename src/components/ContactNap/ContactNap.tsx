'use client';

import React from 'react';
import styles from './ContactNap.module.scss';
import Image from 'next/image';
import { Wrapper } from '../Wrapper/Wrapper';
import { ContactForm } from '../ContactForm/ContactForm';
import { motion, stagger } from 'motion/react';

import iconPhone from '../../assets/icons/icon_contactPhone.png';
import iconEnvelope from '../../assets/icons/icon_contactEnvelope.png';
import iconFacebook from '../../assets/icons/icon_contactFacebook.png';
import { fadeInRight } from '@/assets/animations/fadeIn';

interface Props {
	className?: string;
}
export const ContactNap = ({ className }: Props) => {
	return (
		<section className={`${styles.section} ${className}`}>
			<Wrapper className={styles.wrapper}>
				<address>
					<motion.ul
						className={styles.napContainer}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.3 } },
						}}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.5, once: true }}>

						<motion.li className={styles.napItem} variants={fadeInRight}>
							<a href='tel:+48504058507' aria-label='Zadzwoń do nas'>
								<Image
									src={iconPhone}
									className={styles.icon}
									alt=''
									aria-hidden={true}
									draggable={false}
								/>

								<div className={styles.container}>
									<span>+48 504-058-507</span>
									<p>Zadzwoń, a udzielimy ci niezbędnych informacji</p>
								</div>
							</a>
						</motion.li>

						<motion.li className={styles.napItem} variants={fadeInRight}>
							<a
								href='mailto:example@mail.com'
								aria-label='Napisz wiadomość email'>
								<Image
									src={iconEnvelope}
									className={styles.icon}
									alt=''
									aria-hidden={true}
									draggable={false}
								/>

								<div className={styles.container}>
									<span>example@mail.com</span>
									<p>Napisz bezpośrednio lub skorzystaj z formularza</p>
								</div>
							</a>
						</motion.li>

						<motion.li className={styles.napItem} variants={fadeInRight}>
							<a
								href='https://facebook.pl'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Śledź nas na Facebooku'>
								<Image
									src={iconFacebook}
									className={styles.icon}
									alt=''
									aria-hidden={true}
									draggable={false}
								/>

								<div className={styles.container}>
									<span>/facebook</span>
									<p>Śledź nas na socialach, aby być na bieżąco</p>
								</div>
							</a>
						</motion.li>
					</motion.ul>
				</address>

				<motion.div
					className={styles.formContainer}
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					viewport={{ amount: 0.3, once: true }}>
					<ContactForm />
				</motion.div>
			</Wrapper>
		</section>
	);
};
