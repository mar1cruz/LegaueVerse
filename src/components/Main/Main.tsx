import st from './Main.module.scss'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {LeaguesType} from "../../store/leagues-reducer";
import {DisciplineCard} from "../../ui/disciplineCard/disciplineCard";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

export const Main = () => {
    const disciplines = useSelector<AppStoreType, LeaguesType[]>((state) => state.disciplines)
    //
    // useEffect(() => {
    //     axios.get('nba/teams').then(res => console.log(res.data))
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <div className={st.main}>
            {disciplines.map((discipline, index) => <Link to={`/${discipline.url}`} key={index}>
                <DisciplineCard name={discipline.name}
                                image={discipline.image}
                                imageLogo={discipline.imageLogo}
                                links={discipline.links}
                />
            </Link>)}
        </div>
    );
};

