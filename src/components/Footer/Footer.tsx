import React from 'react'
import styles from './Footer.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Wrapper className={styles.wrapper}>
            <h4>bagno_footer</h4>
        </Wrapper>
    </footer>
  )
}
