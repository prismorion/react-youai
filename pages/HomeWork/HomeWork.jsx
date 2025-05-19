import React from 'react';
import { useEffect } from 'react';
import NavBar from '../components/ui/NavBar';
import styles from './HomeWork.module.css';

const HomeWork = () => {
    useEffect(() => {
        document.title = 'Домашки';
    }, []);

    return (
        <div className={styles.homePageWrapper}>
            <header className={styles.header}>
                <NavBar />
                <img
                src="/images/user-avatar.jpg"
                alt="Аватар пользователя"
                className={styles.userAvatar}
                />
            </header>

            <main className={styles.main}>
                <h2 className={styles.information}>Данная страница находится в разработке</h2>
                <img
                    src="icons/development.png"
                    alt="Разработка"
                    className={styles.developmentIcon}
                />
            </main>
        </div>
    );
};

export default HomeWork;
