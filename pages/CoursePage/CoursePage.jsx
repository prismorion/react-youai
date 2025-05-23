import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styles from './CoursePage.module.css';

const CoursePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const courseName = decodeURIComponent(id);

    return (
        <div className={styles.courseWrapper}>
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    <img src="../icons/back.svg" alt="Назад" className={styles.backIcon} />
                </button>
            </header>

            <section className={styles.courseBanner}>
                <div className={styles.bannerContent}>
                    <h2>{courseName}</h2>
                    <p>36 уроков</p>
                </div>
            </section>

            <section className={styles.sectionList}>
                <h3>Задания</h3>
                <Link className={styles.sectionItem}>
                    <div>
                        <div className={styles.sectionTitle}>Уроки</div>
                        <div className={styles.sectionSubtitle}>2/230 уроков</div>
                    </div>
                    <button className={styles.sectionArrow}>
                        <img src="../icons/courseArrow.svg" alt="Стрелка" className={styles.sectionArrowIcon} />
                    </button>
                </Link>
                <Link className={styles.sectionItem}>
                    <div>
                        <div className={styles.sectionTitle}>Тесты</div>
                        <div className={styles.sectionSubtitle}>0/112 тестов</div>
                    </div>
                    <button className={styles.sectionArrow}>
                        <img src="../icons/courseArrow.svg" alt="Стрелка" className={styles.sectionArrowIcon} />
                    </button>
                </Link>
                <Link className={styles.sectionItem}>
                    <div>
                        <div className={styles.sectionTitle}>Информация</div>
                        <div className={styles.sectionSubtitle}>Описание</div>
                    </div>
                    <button className={styles.sectionArrow}>
                        <img src="../icons/courseArrow.svg" alt="Стрелка" className={styles.sectionArrowIcon} />
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default CoursePage;
