import React, {useEffect} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import styles from "./Discipline.module.scss";
import {useAppDispatch} from "../../store/store";
import {getLeague} from "../../store/leagueSlice";

export const Discipline = () => {
    const {discipline} = useParams<{ discipline: string | undefined }>()

    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    // console.log(discipline)

    useEffect(() => {
        if (discipline) {
            dispatch(getLeague({leagueName: discipline}))
            // navigate(`/${discipline}/scores`)
        }
    }, [dispatch, discipline, navigate]);


    return (
        <>
            <Header/>
            <div className={styles.container}><Outlet/></div>
        </>
    );
};

