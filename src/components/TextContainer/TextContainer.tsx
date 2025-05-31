import React from 'react';
import styles from './TextContainer.module.scss';

interface Props {
	children: React.ReactNode;
    className?: string;
}
export const TextContainer = ({ children, className }: Props) => {
	return <div className={`${styles.container} ${className}`}>{children}</div>;
};
