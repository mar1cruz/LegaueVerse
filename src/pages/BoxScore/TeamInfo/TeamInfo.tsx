import TeamName from "../../../components/TeamName/TeamName";
import styles from "./TeamInfo.module.scss";

type Props = {
    team: { team_logo: string, name: string },
    direction?: 'row' | 'row-reverse'
    textAlign?: 'left' | 'right'
}

export const TeamInfo = ({team, textAlign, direction = 'row'}: Props) => {

    return <div className={styles.stats__team} style={{flexDirection: direction, textAlign: textAlign}}>
        <img className={styles.team__logo} src={team?.team_logo} alt="logo"/>
        <p><TeamName name={team?.name} className='boxScore__title'/></p>
    </div>
};