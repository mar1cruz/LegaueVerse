import React, {useEffect} from 'react';
import {Calendar} from "../../components/Calendar/Calendar";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {MatchesAPIType, setMatchesAC} from "../../store/leagues-reducer";
import styles from './Score.module.scss'


export const Score = () => {
    const {discipline} = useParams<{ discipline: string }>()
    const matches = useAppSelector<MatchesAPIType[] | undefined>(state => state.disciplines.find(d => d.name.toUpperCase() === discipline?.toUpperCase())?.matchesOfDay)
    const dispatch = useAppDispatch();
    const date = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    })

    useEffect(() => {
        dispatch(setMatchesAC(undefined, discipline!))
    }, []);


    return (
        <>
            <div>
                <Calendar disciplineName={discipline}/>
            </div>
            <div className={styles.container}>
                <p className={styles.title}>{date}</p>
                <div className={styles.score__body}>
                    {matches?.map(m => <div className={styles.card__body}>
                        <div className={styles.card__team}>
                            <div><img src={m.visitor_team.team_logo} alt="logo"/></div>
                            <p className={styles.card__team__name}>{m.visitor_team.name}</p>
                        </div>

                        <div className={styles.card__team}>
                            <div>{m.visitor_pts}</div>
                            {m.status && <div>{m.status}</div>}
                            <div>{m.home_pts}</div>
                        </div>

                        <div className={styles.card__team}>
                            <p className={styles.card__team__name}>{m.home_team.name}</p>
                            <div><img src={m.home_team.team_logo} alt="logo"/></div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>);
};

