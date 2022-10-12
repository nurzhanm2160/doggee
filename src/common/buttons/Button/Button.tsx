import React, { FC, HTMLProps } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    children: string;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <button className={styles.button}>{children}</button>;
};
