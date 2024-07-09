import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import styles from './Discipline.module.scss';
import { disciplinesThunks } from '../../store/disciplinesSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const Discipline = () => {
    const { discipline } = useParams<{ discipline: string | undefined }>();
    const disciplines = useAppSelector(state => state.disciplines);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (disciplines.length === 0) {
            dispatch(disciplinesThunks.getDisciplines());
        }
    }, [dispatch, disciplines]);

    useEffect(() => {
        if (discipline && disciplines.length > 0) {
            const isDiscipline = disciplines.some(d => d.name === discipline);

            if (!isDiscipline) {
                navigate('/404');
            } else {
                const currentPath = location.pathname.split('/');
                if (currentPath.length === 2) { // Если текущий путь состоит только из дисциплины
                    navigate(`/${discipline}/scores`, { replace: true });
                }
            }
        }
    }, [discipline, disciplines, navigate, location]);

    return (
        <>
            <Header />
            <div className={styles.container}><Outlet /></div>
        </>
    );
};
