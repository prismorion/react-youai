import React, { useEffect } from 'react';
import InputField from "../components/ui/InputField";
import PasswordField from "../components/ui/PasswordField";
import styles from './Register.module.css';

function Register() {
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        return /^\+?\d{10,15}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const login = form.login.value.trim();
        const password = form.password.value;
        const repeatPassword = form['repeat-password'].value;
        const name = form.name.value.trim();
        const fio = form.surname.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();

        if (!validateEmail(email)) {
            alert('Некорректный email');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Некорректный номер телефона');
            return;
        }

        if (password !== repeatPassword) {
            alert('Пароли не совпадают');
            return;
        }

        const data = {
            login,
            password,
            name,
            email,
            fio,
            phone,
            role: "STUDENT"
        };

        try {
            const response = await fetch('http://81.94.159.158:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                document.cookie = `token=${result.token}; path=/; max-age=31536000`;

                alert('Пользователь успешно зарегистрирован');
                form.reset();
                window.location.href = '/home';
            } else {
                const error = await response.json();
                alert(`Ошибка: ${error.message || 'Не удалось зарегистрироваться'}`);
            }
        } catch (error) {
            alert(`Сетевая ошибка: ${error.message}`);
        }
    };

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.inputForm}>
                <div className={styles.authFields}>
                    <div className={styles.customInput}>
                        <InputField label="Логин" id="login" name="login" placeholder="Введите логин" required />
                    </div>
                    <div className={styles.customInput}>
                        <PasswordField label="Пароль" id="password" name="password" placeholder="*******" required />
                    </div>
                    <div className={styles.customInput}>
                        <PasswordField label="Подтверждение пароля" id="repeat-password" name="repeat-password" placeholder="*******" required />
                    </div>
                    <div className={styles.customInput}>
                        <InputField label="Имя" id="name" name="name" placeholder="Иван" required />
                    </div>
                    <div className={styles.customInput}>
                        <InputField label="Фамилия" id="surname" name="surname" placeholder="Иванов" required />
                    </div>
                    <div className={styles.customInput}>
                        <InputField label="Email" id="email" name="email" placeholder="Введите адрес электронной почты" required />
                    </div>
                    <div className={styles.customInput}>
                        <InputField label="Номер телефона" id="phone" name="phone" placeholder="Введите номер телефона" required />
                    </div>
                </div>
                <button type="submit" className={styles.bth} id={styles.submitBth}>Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Register;
