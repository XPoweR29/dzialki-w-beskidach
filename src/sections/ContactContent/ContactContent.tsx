import React from 'react';
import styles from './ContactContent.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ContactNap } from '@/components/ContactNap/ContactNap';



export const ContactContent = () => {
	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Potrzebujesz więcej informacji?</h2>
				<p className={styles.text}>
					Jesteśmy do Twojej dyspozycji – niezależnie od tego, czy masz pytania
					dotyczące dostępnych działek, lokalizacji czy procesu zakupu.
					Skontaktuj się z nami telefonicznie, napisz e-mail lub odwiedź nas na
					Facebooku, a postaramy się odpowiedzieć na wszystkie Twoje zapytania w
					ciągu 24 godzin.
				</p>

			</Wrapper>
            
            <ContactNap/>
		</section>
	);
};
