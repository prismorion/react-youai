import React from 'react';
import { useEffect } from 'react';
import NavBar from '../components/ui/NavBar';
import styles from './Home.module.css';

const MainPage = () => {
    useEffect(() => {
        document.title = 'Главная - YouAI';
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

            <main>
                <section className={styles.searchBar}>
                    <img
                        src="icons/search.svg"
                        alt="Поиск"
                        className={styles.searchIcon}
                    />
                    <input type="text" placeholder="Введите ваш запрос" className={styles.searchBarInput}/>
                </section>

                {/* <section className="courses">
                    <h2>Доступные направления</h2>
                    <ul>
                        <li>
                        <a href="/courses">
                            <div className="course">
                            <div className="name">Русский язык</div>
                            <div className="description">36 уроков</div>
                            </div>
                            <div className="arrow">→</div>
                        </a>
                        </li>
                        <li>
                        <a href="/courses">Английский язык – 36 уроков →</a>
                        </li>
                        <li>
                        <a href="/courses">Испанский язык – 36 уроков →</a>
                        </li>
                        <li>
                        <a href="/courses">Китайский язык – 36 уроков →</a>
                        </li>
                        <li>
                        <a href="/courses">Арабский язык – 36 уроков →</a>
                        </li>
                        <li>
                        <a href="/courses">Математика – 36 уроков →</a>
                        </li>
                    </ul>
                </section> */}
            </main>
        </div>
    );
};

export default MainPage;
