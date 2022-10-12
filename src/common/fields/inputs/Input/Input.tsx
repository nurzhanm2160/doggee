import React, { FC, HTMLProps } from 'react';
import styles from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
    isError?: boolean;
    helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
    const errorInputStyle = `${styles.input} ${styles.error}`;
    return (
        <>
            <input className={isError ? errorInputStyle : styles.input} {...props} />
            {isError && helperText && <div className={styles.inputHelperText}>{helperText}</div>}
        </>
    );
};
