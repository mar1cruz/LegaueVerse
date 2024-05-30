import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export const Discipline = () => {
    return (
        <>
            <Header/>
            <div style={{flex: '1 0 auto'}}><Outlet/></div>
            <Footer/>
        </>
    );
};

