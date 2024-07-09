import styles from './Main.module.scss'
import {useSelector} from "react-redux";
import {AppStoreType, useAppDispatch} from "../../store/store";
import {useEffect} from "react";
import {DisciplineCard} from "../../pages/DisciplineCard/disciplineCard";
import {disciplinesThunks} from "../../store/disciplinesSlice";
import {ComingSoon} from "../../pages/DisciplineCard/ComingSoon/ComingSoon";
import {DisciplineResponse} from "../../api/types";

export const Main = () => {
    const disciplines = useSelector<AppStoreType, DisciplineResponse[]>((state) => state.disciplines)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (disciplines.length === 0) {
            dispatch(disciplinesThunks.getDisciplines())
        }
    }, [dispatch, disciplines]);

    const headerClassName = disciplines.length > 3 ? `${styles.title} ${styles.absent}` : styles.title

    return (
        <>
            <h1 className={headerClassName}>LeagueVerse</h1>
            <div className={styles.main}>
                {disciplines.map((discipline) => <div key={discipline.id} className={styles.league__wrapper}>
                        {discipline.name === 'coming soon'
                            ? <ComingSoon/>
                            : <DisciplineCard discipline={discipline}/>
                        }
                    </div>
                )}
            </div>
        </>
    );
};

