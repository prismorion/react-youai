import React from 'react';
import NavBar from '../components/ui/NavBar';
import PromoCards from '../components/ui/PromoCards';
import CoursesList from '../components/ui/CoursesList';
import styles from './Home.module.css';

const MainPage = () => {
    return (
        <div className={styles.homePageWrapper}>
            <header className={styles.header}>
                <NavBar />
                <img
                    src="icons/avatar.png"
                    alt="Аватар пользователя"
                    className={styles.userAvatar}
                />
            </header>

            <main>
                <section className={styles.searchBar}>
                    <img
                        src="icons/search.svg"
                        alt="Поиск"
                        className={styles.searchIcon}
                    />
                    <input type="text" placeholder="Введите ваш запрос" className={styles.searchBarInput} />
                </section>

                <PromoCards />
                <CoursesList />
            </main>
        </div>
    );
};

export default MainPage;
