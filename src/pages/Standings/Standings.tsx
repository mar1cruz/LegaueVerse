import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useParams } from "react-router-dom";
import { leagueThunks } from "../../store/leagueSlice";
import styles from "./Standings.module.scss";
import { HeaderTable } from "./HeaderTable/HeaderTable";
import { generateHeaderStandings } from "../../utils/generateHeaderStandings";
import { TeamStandings } from "./TeamStandings/TeamStandings";
import { NbaTeamStats, NhlTeamStats } from "../../api/types";

export const Standings = () => {
    const { discipline } = useParams<{ discipline: string | undefined }>();
    const [filter, setFilter] = useState<'Eastern' | 'Western'>('Eastern');

    const standings = useAppSelector(state => state.league.standings);
    const filteredStandings: NhlTeamStats[] | NbaTeamStats[] = standings[filter] || [];

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getStandings({ leagueName: discipline }));
        }
    }, [dispatch, discipline]);

    const getButtonClass = (conference: 'Eastern' | 'Western') => {
        return filter === conference ? styles.active : '';
    };

    const header = generateHeaderStandings(discipline);

    return (
        <>
            <div className={styles.btn_wrapper}>
                <button onClick={() => setFilter('Eastern')} className={getButtonClass('Eastern')}>
                    Eastern conference
                </button>
                <button onClick={() => setFilter('Western')} className={getButtonClass('Western')}>
                    Western conference
                </button>
            </div>

            <table className={styles.table}>
                <HeaderTable header={header} />
                {filteredStandings.map((team, index) => <TeamStandings key={index} index={index} team={team} />)}
            </table>
        </>
    );
};
