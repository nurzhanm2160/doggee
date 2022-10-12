import React, { FC, HTMLProps } from 'react';
import styles from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
    isError?: boolean;
    helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
    return (
        <>
            <input className={isError ? styles.input__error : styles.input} {...props} />
            {isError && helperText && <div className={styles.input__helper_text}>{helperText}</div>}
        </>
    );
};
