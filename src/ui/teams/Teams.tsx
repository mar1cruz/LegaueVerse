import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setTeamAC, TeamsType} from "../../store/leagues-reducer";
import {AppStoreType} from "../../store/store";
import styles from './Teams.module.scss'

export const Teams = () => {
    const {discipline} = useParams<{ discipline: string }>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (discipline) dispatch(setTeamAC(discipline));
    }, [discipline, dispatch]);

    const teams = useSelector<AppStoreType, TeamsType[]>((state) => {
        const disciplineData = state.disciplines.find(d => d.name.toLowerCase() === discipline);
        return disciplineData ? disciplineData.teams : [];
    });

    if (!teams.length) return <div>Loading...</div>;


    // const divisions: string[] = Array.from(new Set(teams.map(team => team.division)))

    const divisionsWithTeams = Array.from(new Set(teams.map(team => team.division)))
        .map(division => ({
            division,
            teams: teams.filter(team => team.division === division)
        }));

    console.log(divisionsWithTeams)

    return (
        <div className={styles.container}>

            {divisionsWithTeams.map((div) => {
                const {teams, division} = div
                return (<div>
                    <p className={styles.division__name}>{division}</p>

                    <div>
                        {teams.map(t => {
                            return (
                                <div className={styles.team__container}>
                                    <div className={styles.team__logo}></div>
                                    {/*<img src="" alt=""/>*/}
                                    {/*<p>{t.logo}</p>*/}
                                    <p className={styles.team__name}>{t.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>)
            })}
        </div>
    )
}