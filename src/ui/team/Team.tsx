import React from 'react';
import {TeamsType} from "../../store/leagues-reducer";

type TeamPropsType = {
    team: TeamsType[]
}

export const Team = (props: TeamPropsType) => {
    const division = props.team[0].division

    return (
        <div>
            <p style={{color: "red"}}>{division}</p>
            {props.team.map(t => <div>{t.name}</div>)}
        </div>
    );
};

