import styles from './StatsContainer.module.scss'
import {useAppSelector} from "../../../store/store";
import {box_score} from "../../../store/types";
import {Fragment} from "react";
import {FieldGoals} from "../FieldGoals/FieldGoals";
import {SimpleStats} from "../SimpleStats/SimpleStats";

export const StatsContainer = () => {

    const boxScores = useAppSelector<box_score[]>(state => state.league.boxScore.box_score);

    return <div className={styles.stats__stats_container}>
        {boxScores?.map((el, index) => <Fragment key={index}>
                <div className={styles.stats__team_score}>
                    {Array.isArray(el.visitor_value) && Array.isArray(el.home_value) ?
                        (<FieldGoals valueVisitors={el.visitor_value}
                                     valueHome={el.home_value}
                                     name={el.name}/>
                        )
                        : (<SimpleStats valueVisitors={el.visitor_value}
                                        valueHome={el.home_value}
                                        name={el.name}/>
                        )}
                </div>
            </Fragment>
        )}
    </div>
};