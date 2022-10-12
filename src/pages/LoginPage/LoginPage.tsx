import React, { ChangeEvent, FC, useState } from 'react';

import styles from './LoginPage.module.css';
import { Input } from '../../common/fields';
import { Button } from '../../common/buttons';

interface FormErrors {
    username: string | null;
    password: string | null;
}

const isEmpty = (value: string): string | null => {
    if (!value) return 'field is required';
    return null;
};

const validateUsername = (value: string): string | null => {
    return isEmpty(value);
};

const validatePassword = (value: string): string | null => {
    return isEmpty(value);
};

const loginFormValidateSchema = {
    username: validateUsername,
    password: validatePassword,
};

const validateLoginForm = (
    name: keyof typeof loginFormValidateSchema,
    value: string,
): string | null => {
    return loginFormValidateSchema[name](value);
};

const LoginPage: FC = () => {
    const [formValues, setFormValues] = useState({ username: '', password: '' });
    const [formErrors, setFormErrors] = useState<FormErrors>({
        username: null,
        password: null,
    });

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header_container}>DOGGEE</div>
                <div className={styles.form_container}>
                    <div className={styles.input_container}>
                        <Input
                            placeholder='username'
                            value={formValues.username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                const username = e.target.value;
                                setFormValues((prev) => ({ ...prev, username }));

                                const error = validateLoginForm('username', username);
                                setFormErrors((prev) => ({ ...prev, username: error }));
                            }}
                            {...(formErrors.username && {
                                isError: !!formErrors.username,
                                helperText: formErrors.username,
                            })}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <Input
                            placeholder='password'
                            value={formValues.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                const password = e.target.value;
                                setFormValues((prev) => ({ ...prev, password }));

                                const error = validateLoginForm('password', password);
                                setFormErrors((prev) => ({ ...prev, password: error }));
                            }}
                            {...(!!formErrors.password && {
                                isError: !!formErrors.password,
                                helperText: formErrors.password,
                            })}
                        />
                    </div>
                    <div>
                        <Button>sign in</Button>
                    </div>
                </div>

                <div className={styles.signUpContainer}>create new account</div>
            </div>
        </div>
    );
};

export default LoginPage;
