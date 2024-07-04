import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import styles from './Teams.module.scss'
import {leagueThunks} from "../../store/leagueSlice";
import {TeamType} from "../../store/types";
import {log} from "node:util";

export const Teams = () => {
    const {discipline} = useParams<{ discipline: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getTeams({leagueName: discipline}))
        }
    }, [discipline, dispatch]);

    const teams = useAppSelector<TeamType[]>(state => state.league.teams)


    const divisionsWithTeams = teams.reduce((acc, team) => {
        const division = team.division;
        if (!acc[division]) {
            acc[division] = [];
        }
        acc[division].push(team);
        return acc;
    }, {} as Record<string, TeamType[]>);

    return (
        <div className={styles.container}>
            {Object.entries(divisionsWithTeams).map(([division, teams]) => (
                <div key={division}>
                    <p className={styles.division__name}>{division}</p>
                    <div>
                        {teams.map(t => (
                            <div key={t.id} className={styles.team__container}>
                                <div className={styles.team__logo}></div>
                                <p className={styles.team__name}>{t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}