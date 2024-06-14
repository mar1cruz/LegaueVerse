import React, {useEffect} from 'react';
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import HeaderTable from "./headerTable/HeaderTable";
import styles from "./Standings.module.scss";
import {TeamStandings} from "./teamStandings/TeamStandings";
import {setStandingsAC, StandingsType} from "../../store/leagues-reducer";
import {useParams} from "react-router-dom";
import {log} from "node:util";

type myParams = {
    discipline: string
}

export const Standings = () => {
    const {discipline} = useParams<keyof myParams>() as myParams
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setStandingsAC(discipline.toUpperCase()))
    }, [])

    const standings = useAppSelector<StandingsType | undefined>(state =>
        state.disciplines.find(st => st.name.toUpperCase() === discipline.toUpperCase())?.standings
    );

    if (!standings) return <div>No content...</div>;


    return (
        <div>
            {Object.keys(standings).map(conf => {
                return (
                    <table className={styles.table}>
                        <HeaderTable title={`${conf} conference`}/>
                        <TeamStandings teams={standings[conf]}/>

                    </table>)
            })}

        </div>

    );
};


