import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStandingsAC, TeamStats} from "../../store/standings-reducer";
import {AppStoreType} from "../../store/store";
import HeaderTable from "./headerTable/HeaderTable";
import styles from "./Standings.module.scss";
import {TeamStandings} from "./teamStandings/TeamStandings";

const conference = [
    {title: 'Eastern conference', teams: 'Eastern'},
    {title: 'Western conference', teams: 'Western'}
]

export const Standings = () => {
    const dispatch = useDispatch();
    const eastern = useSelector<AppStoreType, TeamStats[]>(state => state.standings.Eastern);
    const western = useSelector<AppStoreType, TeamStats[]>(state => state.standings.Western);

    useEffect(() => {
        dispatch(getStandingsAC())
    }, [])

    const getTeams = (conference: string) => {
        if (conference === 'Eastern') return eastern;
        return western
    }

    return (
        <div>
            {conference.map((conf, i) => <table className={styles.table}>
                <HeaderTable title={conf.title}/>
                <TeamStandings teams={getTeams(conf.teams)}/>
            </table>)}

        </div>

    );
};

