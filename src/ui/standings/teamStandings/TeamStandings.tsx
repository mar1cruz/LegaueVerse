import React from 'react';
import styles from './teamStandings.module.scss';
import {TeamStats} from "../../../store/leagues-reducer";

type Props = {
    teams: TeamStats[]
}

export const TeamStandings = ({teams}: Props) => {
    return (
        <tbody>
        {teams.map((team, index) => (
            <tr key={team.team.id} className={styles.commandRow}>
                <td className={styles.command}>
                    <div className={styles.wrapperCommand}>
                        <div className={styles.id}>{index + 1}</div>
                        <div className={styles.icon}>
                            <img src={team.team.team_logo}/>
                        </div>
                        <div>{team.team.name}</div>
                    </div>
                </td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.winning_percentage}</td>
                <td>{team.games_back}</td>
                <td className={styles.points}>{team.points_percentage_game}</td>
                <td className={styles.points}>{team.oop_points_percentage_game}</td>
            </tr>
        ))}
        </tbody>
    );
};
