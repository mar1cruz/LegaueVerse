import React, {useEffect} from 'react';
import {Calendar} from "../../components/Calendar/Calendar";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import styles from './Score.module.scss';
import {MatchesAPIType} from "../../store/types";
import {leagueThunks} from "../../store/leagueSlice";
import TeamName from "../../components/TeamName/TeamName";

export const Score = () => {
    const matches = useAppSelector<MatchesAPIType[]>(state => state.league.matchesOfDay);
    const dates = useAppSelector<string[]>(state => state.league.matchesDates);

    const {discipline} = useParams<{ discipline: string | undefined }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getMatchesDates({leagueName: discipline}));
        }
    }, [dispatch, discipline]);

    useEffect(() => {
        if (discipline && dates.length > 0 && !searchParams.has("date")) {
            dispatch(leagueThunks.getScore({leagueName: discipline, date: dates[0]}));
        }
    }, [searchParams, dates, discipline, dispatch]);

    const handleNavigate = (slug: string) => {
        navigate(`/${discipline}/scores/${slug}/`);
    };

    const date = matches.length === 0
        ? new Date(dates[0]).toLocaleDateString("en-US", {month: "short", day: "numeric"})
        : new Date(matches[0]?.date).toLocaleDateString("en-US", {month: "short", day: "numeric"});

    return (
        <>
            <Calendar leagueName={discipline} dates={dates}/>

            <div className={styles.container}>
                <p className={styles.title}>{date}</p>
                <div className={styles.score__body}>
                    {matches.map(m => {
                        const visitorClass = m.visitor_pts < m.home_pts ? styles.looser : '';
                        const homeClass = m.home_pts < m.visitor_pts ? styles.looser : '';

                        return (
                            <div key={m.id} className={styles.card__body} onClick={() => handleNavigate(m.slug)}>
                                <div className={styles.card__team}>
                                    <img className={styles.card__logo} src={m.visitor_team.team_logo} alt="logo"/>
                                    <p className={`${styles.card__team__name} ${visitorClass}`}>
                                        <TeamName name={m.visitor_team.name}/>
                                    </p>
                                </div>

                                <div className={styles.card__points}>
                                    <span className={`${styles.score} ${visitorClass}`}>{m.visitor_pts}</span>
                                    <span className={styles.final}>final</span>
                                    <span className={`${styles.score} ${homeClass}`}>{m.home_pts}</span>
                                </div>

                                <div className={`${styles.card__team} ${styles.home__team}`}>
                                    <p className={`${styles.card__team__name} ${homeClass}`}>
                                        <TeamName name={m.home_team.name}/>
                                    </p>
                                    <img className={styles.card__logo} src={m.home_team.team_logo} alt="logo"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
