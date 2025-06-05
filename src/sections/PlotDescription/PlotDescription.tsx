'use client';

import React from 'react';
import styles from './PlotDesctiprion.module.scss';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Image from 'next/image';
import forest_s from '../../assets/images/forest.png';
import forest_xl from '../../assets/images/forest_large.png';
import { TextContainer } from '@/components/TextContainer/TextContainer';
import { useBreakpoints } from '@/hooks/useBreakpoint';

interface Props {
	children: React.ReactNode;
}
export const PlotDescription = ({ children }: Props) => {
    const { breakpoint } = useBreakpoints();

	return (
        <>
            <section className={styles.section}>
                <Wrapper>
                    <h2 className={styles.heading}>Opis nieruchomości</h2>
                    <TextContainer>{children}</TextContainer>
                </Wrapper>
                <Image src={breakpoint.lg?forest_xl:forest_s} className={styles.forestImg} alt='' aria-hidden={true} draggable={false} />
            </section>
        </>
	);
};
