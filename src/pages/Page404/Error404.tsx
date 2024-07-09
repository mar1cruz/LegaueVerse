import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Error404.module.scss';

export const Page404 = () => {
    return (
        <div className={styles.error__container}>
            <p className={styles.error__error_title}>Error404</p>
            <p className={styles.error__error__text}>Page not found</p>
            <Link to='/' className={styles.error__error__link}>Open main page</Link>
        </div>
    );
};
