import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div>
            <NavLink to='/dota'>Dota</NavLink>
            <NavLink to='/counterStrike'>CS</NavLink>
            <NavLink to='/rocketLeague'>Rocket Legue</NavLink>
            <NavLink to='/valorant'>Valorant</NavLink>
        </div>
    );
};

