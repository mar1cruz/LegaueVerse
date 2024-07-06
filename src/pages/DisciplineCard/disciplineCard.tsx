import styles from './disciplineCard.module.scss';
import {Link} from 'react-router-dom';
import {Disciplines} from "../../store/types";

type Props = {
    discipline: Disciplines;
};

const links = ['scores', 'standings', 'schedule', 'teams', 'stats'];

export const DisciplineCard = ({discipline}: Props) => {
    const {name, image, logo} = discipline;

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <img className={styles.image} src={image} alt={name}/>
                <img className={styles.image__logo} src={logo} alt={name}/>
                <p className={styles.name}>{name}</p>
            </div>

            <div onClick={(e) => e.stopPropagation()} className={styles.links__wrapper}>
                {links.map((link, index) => <Link to={`/${discipline.name}/${link}`} key={index} className={styles.link}>
                        {link}
                    </Link>
                )}
            </div>
        </div>
    );
};
