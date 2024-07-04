import React from 'react';
import styles from './TeamStandings.module.scss';
import {NbaTeamStats, NhlTeamStats} from "../../../store/types";

type Props = {
    team: NbaTeamStats | NhlTeamStats
    index: number
}

export const TeamStandings = ({team, index}: Props) => {
    const [, ...teamResult] = Object.values(team)

    return (
        <tbody>
        <tr key={team.team.id} className={styles.commandRow}>
            <td className={styles.command}>
                <div className={styles.wrapperCommand}>
                    <span className={styles.index}>{index + 1}</span>
                    <div className={styles.icon}>
                        <img src={team.team.team_logo} alt={team.team.name + ' logo'}/>
                    </div>
                    <span className={styles.team__name}>{team.team.name}</span>
                </div>
            </td>
            {teamResult.map((t,i) => <td key={i}>{t}</td>)}
        </tr>
        </tbody>
    );
};
