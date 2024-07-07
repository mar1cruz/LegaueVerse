import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import styles from './Teams.module.scss'
import {leagueThunks} from "../../store/leagueSlice";
import {Team} from "../../store/types";

export const Teams = () => {
    const {discipline} = useParams<{ discipline: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getTeams({leagueName: discipline}))
        }
    }, [discipline, dispatch]);

    const teams = useAppSelector<Team[]>(state => state.league.teams)

    console.log(teams)

    const divisionsWithTeams = teams.reduce((acc, team) => {
        const division = team.division;
        if (!acc[division]) {
            acc[division] = [];
        }
        acc[division].push(team);
        return acc;
    }, {} as Record<string, Team[]>);
    console.log(divisionsWithTeams)

    return (
        <div className={styles.container}>
            {Object.entries(divisionsWithTeams).map(([division, teams]) => (
                <div key={division}>
                    <p className={styles.division__name}>{division}</p>
                    <div>
                        {teams.map(t => (
                            <div key={t.id} className={styles.team__container}>
                                {/*<div className={styles.team__logo}></div>*/}
                                <img className={styles.team__logo} src={t.team_logo} alt={t.team_logo}/>
                                <p className={styles.team__name}>{t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}