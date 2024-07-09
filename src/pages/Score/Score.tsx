import React, {useEffect} from 'react';
import {Calendar} from "../../components/Calendar/Calendar";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import styles from './Score.module.scss';
import {leagueThunks} from "../../store/leagueSlice";
import TeamName from "../../components/TeamName/TeamName";
import classNames from 'classnames';
import {ScoresResponse} from "../../api/types";

export const Score = () => {
    const matches = useAppSelector<ScoresResponse[]>(state => state.league.matchesOfDay);
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
        const dateToUse = searchParams.size ? searchParams.get('date') : dates[0];

        if (discipline && dates.length > 0 && dateToUse) {
            dispatch(leagueThunks.getScore({leagueName: discipline, date: dateToUse}));
        }
    }, [searchParams, dates, discipline, dispatch]);


    const handleNavigate = (slug: string) => {
        navigate(`/${discipline}/scores/${slug}/`);
    };

    const date = matches.length === 0
        ? new Date(dates[0]).toLocaleDateString("en-US", {month: "short", day: "numeric"})
        : new Date(matches[0]?.date).toLocaleDateString("en-US", {month: "short", day: "numeric"});

    const scoreClass = classNames({
        [styles.score__body]: matches.length <= 3,
        [styles.score__body_grid]: matches.length > 3,
    });
    const cardBodyClass = classNames({
        [styles.card__body]: matches.length <= 3,
        [styles.card__body_grid]: matches.length > 3,
        [styles.border]: true,
    });
    const isRightTeam = classNames({
        [styles.right__team]: matches.length <= 3,
        [styles.left__team]: matches.length > 3,
    });
    const cardTeam = classNames({
        [styles.card__team]: matches.length <= 3,
        [styles.card__team_grid]: matches.length > 3,
    });
    const cardPoint = classNames({
        [styles.card__points]: matches.length <= 3,
        [styles.card__points_grid]: matches.length > 3
    })

    return (
        <div className={styles.score__container}>
            <div className={styles.container}>
                <div className={styles.calendar__container}>
                    <Calendar leagueName={discipline} dates={dates}/>
                    <p className={styles.title}>{date}</p>
                </div>

                <div className={scoreClass}>
                    {matches.map(m => {
                        const visitorClass = m.visitor_pts < m.home_pts ? styles.looser : '';
                        const homeClass = m.home_pts < m.visitor_pts ? styles.looser : '';

                        return (
                            <div key={m.id} className={cardBodyClass}
                                 onClick={() => handleNavigate(m.slug)}>


                                <div className={`${cardTeam} ${styles.visitor__team}`}>
                                    <img className={styles.card__logo} src={m.visitor_team.team_logo} alt="logo"/>
                                    <p className={`${styles.card__team__name} ${visitorClass}`}>
                                        <TeamName name={m.visitor_team.name}/>
                                    </p>
                                </div>

                                <div className={cardPoint}>
                                    <span className={`${styles.score} ${visitorClass}`}>{m.visitor_pts}</span>
                                    <span className={styles.final}>final</span>
                                    <span className={`${styles.score} ${homeClass}`}>{m.home_pts}</span>
                                </div>

                                <div className={`${cardTeam} ${isRightTeam} ${styles.home__team}`}>
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
        </div>
    );
};
