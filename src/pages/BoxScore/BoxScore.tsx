import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useEffect} from "react";
import {leagueThunks} from "../../store/leagueSlice";
import {Team} from "../../store/types";
import styles from "./BoxScore.module.scss";
import {TeamInfo} from "./TeamInfo/TeamInfo";
import {StatsContainer} from "./StatsContainer/StatsContainer";

export const BoxScore = () => {
    const {slug, discipline} = useParams<{ slug?: string, discipline?: string }>();
    const dispatch = useAppDispatch();

    const homeTeam = useAppSelector<Team>(state => state.league.boxScore.home_team);
    const visitorTeam = useAppSelector<Team>(state => state.league.boxScore.visitor_team);

    useEffect(() => {
        if (slug && discipline) {
            dispatch(leagueThunks.getBoxScore({leagueName: discipline, slug}));
        }
    }, [dispatch, slug, discipline]);

    return (
        <div className={styles.score__container}>
            <p className={styles.score__title}>GAME STATS</p>
            <div className={styles.stats__container}>
                <TeamInfo team={visitorTeam} />
                <StatsContainer/>
                <TeamInfo team={homeTeam} direction='row-reverse' textAlign='right'/>
            </div>
        </div>
    );
};