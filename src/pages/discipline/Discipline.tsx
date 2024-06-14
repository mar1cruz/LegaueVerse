import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import styles from "./Discipline.module.scss";

export const Discipline = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}><Outlet/></div>
            <Footer/>
        </>
    );
};

