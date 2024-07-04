import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {leagueThunks} from "../../store/leagueSlice";
import {StatsType} from "../../store/types";
import styles from "./Stats.module.scss";

const Stats = () => {
    const {discipline} = useParams<{ discipline: string | undefined }>();
    const dispatch = useAppDispatch();
    const stats = useAppSelector<StatsType>(state => state.league.stats);

    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getStats({leagueName: discipline}));
        }
    }, [dispatch, discipline]);

    const nominationTitles = Object.keys(stats);

    return (
        <div className={styles.stats__container}>
            <p className={styles.title}>Season Leaders</p>

            <div className={styles.nomination__wrapper}>
                {nominationTitles.map(title => (
                    <div key={title} className={styles.nomination__container}>
                        <p className={styles.nomination__name}>{title}</p>
                        <div className={styles.teams__container}>
                            {stats[title].map((teamStats, index) => {
                                const isFirstClass = index === 0 ? styles.first : "";

                                return <div key={teamStats.team} className={styles.team__container}>
                                    <span className={`${styles.team__index} ${isFirstClass}`}>{index + 1}.</span>
                                    <p className={isFirstClass}>{teamStats.team}</p>
                                    <p className={isFirstClass}>{teamStats.value}</p>
                                </div>
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
