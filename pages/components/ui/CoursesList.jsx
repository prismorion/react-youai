import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CoursesList.module.css';

const courses = [
    'Русский язык',
    'Английский язык',
    'Испанский язык',
    'Китайский язык',
    'Арабский язык',
    'Математика',
];

const CoursesList = () => {
    return (
        <section className={styles.coursesSection}>
            <h2 className={styles.title}>Доступные направления</h2>
            <ul className={styles.courseList}>
                {courses.map((course, idx) => (
                    <li key={idx} className={styles.courseItem}>
                        <Link to={`/courses/${encodeURIComponent(course)}`}>
                            <div className={styles.linkTitle}>
                                <div className={styles.name}>{course}</div>
                                <div className={styles.description}>36 уроков</div>
                            </div>                            
                            <img src='icons/arrow.svg' alt="Стрелка" className={styles.arrow} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CoursesList;
