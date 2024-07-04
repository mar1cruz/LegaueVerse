import React from 'react';
import {Calendar} from "../../components/Calendar/Calendar";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import styles from './Score.module.scss'
import {MatchesAPIType} from "../../store/types";


export const Score = () => {
    const {discipline} = useParams<{ discipline: string | undefined }>()
    const matches = useAppSelector<MatchesAPIType[]>(state => state.league.matchesOfDay)
    const navigate = useNavigate();


    const date = matches[0]?.date
        ? new Date(matches[0]?.date).toLocaleDateString("en-US", {month: "short", day: "numeric",})
        : new Date().toLocaleDateString("en-US", {month: "short", day: "numeric",})


    const handleNavigate = (slug: string) => {
        navigate(`/${discipline}/scores/${slug}`)
    }

    return (
        <>
            <Calendar leagueName={discipline}/>

            <div className={styles.container}>
                <p className={styles.title}>{date}</p>
                <div className={styles.score__body}>
                    {matches.length === 0 && <div>No matches today</div>}
                    {matches?.map(m => {
                        const [visitorFirstName, visitorLastName] = m.visitor_team.name.split(" ");
                        const [homeFirstName, homeLastName] = m.home_team.name.split(" ");

                        const visitorClass = m.visitor_pts < m.home_pts ? styles.looser : '';
                        const homeClass = m.home_pts < m.visitor_pts ? styles.looser : '';

                        return (
                            <div key={m.id} className={styles.card__body} onClick={() => handleNavigate(m.slug)}>
                                <div className={styles.card__team}>
                                    <img className={styles.card__logo} src={m.visitor_team.team_logo} alt="logo"/>
                                    <p className={`${styles.card__team__name} ${visitorClass}`}>
                                        <span>{visitorFirstName}</span>
                                        <span>{visitorLastName}</span>
                                    </p>
                                </div>

                                <div className={styles.card__points}>
                                    <span className={`${styles.score} ${visitorClass}`}>{m.visitor_pts}</span>
                                    <span className={styles.final}>final</span>
                                    <span className={`${styles.score} ${homeClass}`}>{m.home_pts}</span>
                                </div>

                                <div className={`${styles.card__team} ${styles.home__team}`}>
                                    <p className={`${styles.card__team__name} ${homeClass}`}>
                                        <span>{homeFirstName}</span>
                                        <span>{homeLastName}</span>
                                    </p>
                                    <img className={styles.card__logo} src={m.home_team.team_logo} alt="logo"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>);
};

