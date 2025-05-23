import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        navigate('/login');
    };

    return (
        <div className={styles.profilePageWrapper}>
            <header className={styles.header}>
                <NavBar />
            </header>

            <main className={styles.main}>
                <section className={styles.avatarBlock}>
                    <img src="icons/avatar.png" alt="Аватар" className={styles.userAvatar} />
                    <div className={styles.userame}>Олег</div>
                    <div className={styles.userID}>3fa85f64-5717-4562-b3fc-2c963f66afa6</div>
                    <button className={styles.linkExit} onClick={handleLogout}>Выход</button>
                </section>

                <section className={styles.rankSection}>
                    <span className={styles.nameRankSection}>Звание</span>
                    <div className={styles.rankProgressBar}>
                        <span className={styles.rankName}>Ученый</span>
                        <div className={styles.progress}>
                            <hr className={styles.progressBar} id={styles.backBar}/>
                            <hr className={styles.progressBar} id={styles.frontBar}/>
                        </div>
                    </div>
                    <div className={styles.rankPoints}>
                        <img src='icons/book.svg' alt='' className={styles.bookIcon} />
                        <span className={styles.numberPoints}>200 / 1000</span>
                    </div>
                </section>

                <section className={styles.footer}>
                    <section className={styles.statsSection}>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Серия</span>
                            <div className={styles.statIcon}>
                                <img src='icons/series.svg' alt='Серия' className={styles.statImgIcon} />
                                <span className={styles.statValue}>0</span>                   
                            </div>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Лига</span>
                            <div className={styles.statIcon}>
                                <img src='icons/league.svg' alt='Лига' className={styles.statImgIcon} />
                                <span className={styles.statValue}>-</span>                   
                            </div>
                        </div>
                    </section>

                    <section className={styles.buttonsSection}>
                        <button className={styles.button}>Узнать свой уровень</button>
                        <Link className={styles.link} id={styles.family}>
                            <img src='icons/heart.svg' alt='Сердце' className={styles.linkIcon} />
                            <span className={styles.linkText}>Семья</span>
                        </Link>
                        <Link className={styles.link} id={styles.subscription}>Подписки</Link>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Profile;
