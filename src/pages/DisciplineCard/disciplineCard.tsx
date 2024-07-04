import styles from './disciplineCard.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    name: string;
    imageLogo: string;
    image: string;
};

const links = ['scores', 'standings', 'schedule', 'teams', 'stats'];

export const DisciplineCard = (props: Props) => {
    const discipline = props.name;

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <img className={styles.image} src={props.image} alt={props.name} />
                <img className={styles.image__logo} src={props.imageLogo} alt={props.name} />
                <p className={styles.name}>{props.name}</p>
            </div>

            <div onClick={(e) => e.stopPropagation()} className={styles.links__wrapper}>
                {links.map((link, index) => (
                    <Link to={`/${discipline}/${link}`} key={index} className={styles.link}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
};
