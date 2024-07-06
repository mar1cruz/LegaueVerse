import styles from './Main.module.scss'
import {useSelector} from "react-redux";
import {AppStoreType, useAppDispatch} from "../../store/store";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {DisciplineCard} from "../../pages/DisciplineCard/disciplineCard";
import {disciplinesThunks} from "../../store/disciplinesSlice";
import {Disciplines} from "../../store/types";

export const Main = () => {
    const disciplines = useSelector<AppStoreType, Disciplines[]>((state) => state.disciplines)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(disciplinesThunks.getDisciplines())
    }, [dispatch]);

    return (
        <div className={styles.main}>
            {disciplines.map((discipline) => <div key={discipline.id} className={styles.league__wrapper}>
                    <Link to={`/${discipline.name}/scores`} className={styles.league__link}></Link>
                    <DisciplineCard discipline={discipline}/>
                </div>
            )}
        </div>
    );
};

