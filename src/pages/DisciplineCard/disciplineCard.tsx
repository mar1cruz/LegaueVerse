import styles from './disciplineCard.module.scss';
import {Link} from 'react-router-dom';
import {DisciplineResponse} from "../../api/types";

type Props = {
    discipline: DisciplineResponse;
};

const links = ['scores', 'standings', 'schedule', 'teams', 'stats'];

export const DisciplineCard = ({discipline}: Props) => {
    const {name, background, logo} = discipline;

    console.log(1)

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <img className={styles.image} src={background} alt={name}/>
                <img className={styles.image__logo} src={logo} alt={name}/>
                <p className={styles.name}>{name}</p>
                <Link to={`/${discipline.name}/scores`} className={styles.league__link}></Link>
            </div>


            <div onClick={(e) => e.stopPropagation()} className={styles.links__wrapper}>
                {links.map((link, index) => <Link to={`/${discipline.name}/${link}`} key={index}
                                                  className={styles.link}>
                        {link}
                    </Link>
                )}
            </div>
        </div>
    );
};
