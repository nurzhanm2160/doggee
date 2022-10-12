import React, { ChangeEvent, FC, useState } from 'react';

import styles from './LoginPage.module.css';
import { Input } from '../../common/fields';
import { Button } from '../../common/buttons';

const LoginPage: FC = () => {
    const [formValues, setFormValues] = useState({ username: '', password: '' });

    return (
        <div className={styles.login__page}>
            <div className={styles.login__page__container}>
                <div>header</div>
                <div className={styles.login__page__form__container}>
                    <div className={styles.login__page__input_container}>
                        <Input
                            isError={true}
                            helperText='validation'
                            placeholder='username'
                            value={formValues.username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setFormValues((prev) => ({ ...prev, username: e.target.value }))
                            }
                        />
                    </div>
                    <div className={styles.login__page__input_container}>
                        <Input
                            placeholder='password'
                            value={formValues.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setFormValues((prev) => ({ ...prev, password: e.target.value }))
                            }
                        />
                    </div>
                    <div>
                        <Button>sign in</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
