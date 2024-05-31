import React from 'react';
import {TeamStats} from "../../../store/standings-reducer";
import styles from './teamStandings.module.scss';

type TeamStandingsProps = {
    teams: TeamStats[]
}

export const TeamStandings: React.FC<TeamStandingsProps> = ({teams}) => {
    return (
        <tbody>
        {teams.map((team, index) => (
            <tr key={team.team.id} className={styles.commandRow}>
                <td className={styles.command}>
                    <div className={styles.wrapperCommand}>
                        <div className={styles.id}>{index + 1}</div>
                        <div className={styles.icon}>
                            <img src={team.team.team_logo} />
                        </div>
                        <div>{team.team.name}</div>
                    </div>
                </td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.winning_percentage}</td>
                <td>{team.games_back}</td>
                <td style={{width: "50px"}}>{team.points_percentage_game}</td>
                <td style={{width: "50px"}}>{team.oop_points_percentage_game}</td>
            </tr>
        ))}
        </tbody>
    );
};
