import React from 'react';
import styles from './Header.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {Button} from "../../ui/button/Button";
import {useAppSelector} from "../../store/store";

const LinkPage = ['SCORE', 'STANDINGS', 'SCHEDULE', 'TEAMS', 'PLAYOFF']

export const Header = () => {
    const {discipline} = useParams()
    const image = useAppSelector<string>((state) => state.disciplines.find(c => c.name.toLowerCase() === discipline)!.imageLogo)

    // console.log(discipline)

    return (
        <div className={styles.header}>
            <div className={styles.header__body}>
                <img className={styles.logo} src={image} alt="logo"/>
                <p>{discipline?.toUpperCase()}</p>
                <Button/>
            </div>

            <nav className={styles.navigate}>{LinkPage.map(l => <NavLink
                className={({isActive}) => isActive ? styles.link + ' ' + styles.active : styles.link}
                to={l.toLowerCase()}> {l} </NavLink>)}
            </nav>
        </div>
    );
};

