import React from 'react';
import styles from './Header.module.scss'
import {Link, NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {authThunks} from "../../features/auth/authSlice";

const LinkPage = ['SCORES', 'STANDINGS', 'SCHEDULE', 'TEAMS', 'STATS']

export const Header = () => {
    const {discipline} = useParams<{ discipline: string }>()
    const isLoggedIn = useAppSelector(state => !!state.auth.token)
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(authThunks.logOut())
    }

    return (
        <div className={styles.header__container}>
            <div className={styles.header__body}>
                <Link to='/' className={styles.logo}>LV</Link>
                <div className={styles.header__location}>
                    <p className={styles.location__siteName}>LeagueVerse</p>
                    <p className={styles.location__text}>{discipline}</p>
                </div>
            </div>

            <nav className={styles.navigate}>
                {LinkPage.map((l, index) =>
                    <NavLink key={index}
                             className={({isActive}) => isActive ? styles.link + ' ' + styles.active : styles.link}
                             to={l.toLowerCase()}> {l} </NavLink>)}
            </nav>

            {!isLoggedIn && <Link className={styles.button__login} to='/login'>Login</Link>}
            {isLoggedIn && <button className={styles.button} onClick={handleLogOut}>Logout</button>}
        </div>
    );
};

