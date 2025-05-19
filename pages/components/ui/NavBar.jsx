import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const navLinks = [
  {
    to: '/home',
    icon: 'icons/main.svg',
    label: 'Главная',
    alt: 'Главная'
  },
  {
    to: '/home-work',
    icon: 'icons/home-work.svg',
    label: 'Домашки',
    alt: 'Домашки'
  },
  {
    to: '/chat-ai',
    icon: 'icons/chat.svg',
    label: 'Чат с AI',
    alt: 'Чат с AI'
  },
  {
    to: '/profile',
    icon: 'icons/profile.svg',
    label: 'Профиль',
    alt: 'Профиль'
  },
];

const NavBar = () => {
  return (
        <nav className={styles.navBar}>
            {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className={styles.navLink}>
                    <img src={link.icon} alt={link.alt} className={styles.navIcon} />
                    <div className={styles.linkName}>{link.label}</div>
                </Link>
            ))}
        </nav>
  );
};

export default NavBar;
