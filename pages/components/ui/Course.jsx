import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Course.module.css';

const Course = () => {
  return (
        <a href="/courses">
            <div className="course">
            <div className="name">Русский язык</div>
            <div className="description">36 уроков</div>
            </div>
            <div className="arrow">→</div>
        </a>
    );
};

export default Course;
