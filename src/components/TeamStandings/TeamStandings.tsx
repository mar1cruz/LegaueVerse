import styles from "../../pages/Standings/TeamStandings/TeamStandings.module.scss";
import React from "react";

type Props = {
    index: number
    logo: string
    name: string
}

export const TeamStandings = ({logo, name, index}: Props) => {
    return (
        <td className={styles.command}>
            <div className={styles.wrapperCommand}>
                <span className={styles.index}>{index}</span>
                <div className={styles.icon}>
                    <img src={logo} alt='logo'/>
                </div>
                <span className={styles.team__name}>{name}</span>
            </div>
        </td>
    )
}
