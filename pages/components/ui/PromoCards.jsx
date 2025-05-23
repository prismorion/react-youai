import React from 'react';
import styles from '../styles/PromoCards.module.css';

const promoData = [
    {
        title: 'Не знаете с чего начать?',
        description: 'Пройдите небольшой тест, чтобы понять потребности',
    },
    {
        title: 'Не забудь о домашке…',
        description: 'Ведь домашнее задание это залог хорошего запоминания',
    },
    {
        title: 'Задумался о новой подписке?',
        description: 'Просмотри все планы обучения и выбери самый выгодный',
    },
];

const PromoCards = () => {
    return (
        <section className={styles.promoWrapper}>
            {promoData.map((promo, index) => (
                <div key={index} className={styles.card}>
                    <h3>{promo.title}</h3>
                    <p>{promo.description}</p>
                    <button className={styles.button}>Подробнее</button>
                </div>
            ))}
        </section>
    );
};

export default PromoCards;
