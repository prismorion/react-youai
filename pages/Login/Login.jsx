import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from "../components/ui/InputField";
import PasswordField from "../components/ui/PasswordField";
import styles from './Login.module.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const login = form.username.value;
        const password = form.password.value;

        try {
            const response = await fetch('http://81.94.159.158:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });

            if (!response.ok) {
                alert('Ошибка входа. Проверьте логин и пароль.');
                return;
            }

            const data = await response.json();

            document.cookie = `token=${data.token}; path=/; max-age=31536000`;

            navigate('/home');
        } catch (error) {
            console.error('Ошибка при логине:', error);
            alert('Произошла ошибка. Попробуйте позже.');
        }
    };

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.inputForm}>
                <img src="icons/logo.svg" alt="Логотип" className={styles.logoIcon} />

                <div className={styles.authFields}>
                    <div className={styles.customInput}>
                        <InputField
                            label="Логин"
                            id="username"
                            name="username"
                            placeholder="Введите логин"
                            required
                        />
                    </div>

                    <div className={styles.customInput}>
                        <PasswordField
                            label="Пароль"
                            id="password"
                            name="password"
                            placeholder="*******"
                            required
                        />
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" className={styles.bth} id={styles.submitBth}>Войти</button>
                    <Link to="/register" className={styles.bth} id={styles.registerBth}>Регистрация</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
