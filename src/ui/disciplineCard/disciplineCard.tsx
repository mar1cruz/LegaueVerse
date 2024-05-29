import st from './disciplineCard.module.scss'
import {Link} from "react-router-dom";
import {LinkType} from "../../store/leagues-reducer";

type DisciplineCardPropsType = {
    name: string
    imageLogo: string
    image: string
    links: LinkType[]
}

export const DisciplineCard = (props: DisciplineCardPropsType) => {
    return (
        <div className={st.body}>
            <div className={st.header}>
                <img className={st.image} src={props.image} alt={props.name}/>
                <img className={st.image__logo} src={props.imageLogo} alt={props.name}/>
                <p className={st.name}>{props.name}</p>
            </div>

            <div onClick={(e) => e.stopPropagation()} className={st.links}>
                {props.links.map((link, index) => <Link to={link.url} key={index} className={st.link}>
                    {link.name}
                </Link>)}
            </div>
        </div>)
}