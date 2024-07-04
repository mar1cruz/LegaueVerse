import React from 'react';
import styles from './Header.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import {Button} from "../Button/Button";

const LinkPage = ['SCORES', 'STANDINGS', 'SCHEDULE', 'TEAMS', 'STATS']

export const Header = () => {
    const {discipline} = useParams<{ discipline: string }>()
    const image = useAppSelector<string>((state) => state.league.logo)

    const leagueName = discipline?.toUpperCase()

    return (
        <div className={styles.header}>
            <div className={styles.header__body}>
                <img className={styles.logo} src={image} alt="logo"/>
                <p>{leagueName}</p>
                <Button/>
            </div>

            <nav className={styles.navigate}>
                {LinkPage.map((l, index) => <NavLink key={index}
                                                     className={({isActive}) => isActive ? styles.link + ' ' + styles.active : styles.link}
                                                     to={l.toLowerCase()}> {l} </NavLink>)}
            </nav>
        </div>
    );
};

