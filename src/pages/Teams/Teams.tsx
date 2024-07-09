import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import styles from './Teams.module.scss'
import {leagueThunks} from "../../store/leagueSlice";
import {TeamResponse} from "../../api/types";

export const Teams = () => {
    const {discipline} = useParams<{ discipline: string }>();
    const teams = useAppSelector<TeamResponse>(state => state.league.teams);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getTeams({leagueName: discipline}))
        }
    }, [discipline, dispatch]);


    return (
        <div className={styles.container}>
            {Object.entries(teams).map(([division, teamList]) => (
                <div key={division}>
                    <p className={styles.division__name}>{division}</p>
                    <div>
                        {teamList.map(t => (
                            <div key={t.id} className={styles.team__container}>
                                <img className={styles.team__logo} src={t.team_logo} alt='logo'/>
                                <p className={styles.team__name}>{t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
