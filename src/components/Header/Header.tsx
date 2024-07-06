import React from 'react';
import styles from './Header.module.scss'
import {Link, NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Button} from "../Button/Button";
import {leagueThunks} from "../../store/leagueSlice";
import {authThunks} from "../../features/auth/authSlice";
import {buttonClasses} from "@mui/material";

const LinkPage = ['SCORES', 'STANDINGS', 'SCHEDULE', 'TEAMS', 'STATS']

export const Header = () => {
    const {discipline} = useParams<{ discipline: string }>()
    const image = useAppSelector<string>((state) => state.league.logo)
    const isLoggedIn = useAppSelector(state => !!state.auth.token)
    const dispatch = useAppDispatch()

    const leagueName = discipline?.toUpperCase()

    const handleLogOut = () => {
        dispatch(authThunks.logOut())
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__body}>
                <img className={styles.logo} src={image} alt="logo"/>
                <p>{leagueName}</p>
                <Button/>
                {!isLoggedIn && <button><Link to='/login'>Log in</Link></button>}
                {isLoggedIn && <button onClick={handleLogOut}>Log out</button> }
            </div>

            <nav className={styles.navigate}>
                {LinkPage.map((l, index) => <NavLink key={index}
                                                     className={({isActive}) => isActive ? styles.link + ' ' + styles.active : styles.link}
                                                     to={l.toLowerCase()}> {l} </NavLink>)}
            </nav>
        </div>
    );
};

