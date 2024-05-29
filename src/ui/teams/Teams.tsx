import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setTeamAC, TeamsType} from "../../store/leagues-reducer";
import {AppStoreType} from "../../store/store";
import {Team} from "../team/Team";

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

    const copyTeams: TeamsType[] = JSON.parse(JSON.stringify(teams));

    const divisions: string[] = Array.from(new Set(teams.map(team => team.division)))

    const divisionsTeams: TeamsType[][] = divisions.map(division => {
        return copyTeams.filter(team => team.division === division);
    });

    console.log(divisionsTeams)

    return <div>
        {divisionsTeams.map((t) => <Team team={t} />)}
    </div>
}