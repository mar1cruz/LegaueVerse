import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Fragment, useEffect} from "react";
import {leagueThunks} from "../../store/leagueSlice";
import {BoxScoreApi} from "../../store/types";
import styles from "./BoxScore.module.scss";
import {useConfigFile} from "../../hooks/useConfigFile";
import TeamName from "../../components/TeamName/TeamName";

export const BoxScore = () => {
    const {slug, discipline} = useParams<{ slug: string | undefined, discipline: string | undefined }>()
    const dispatch = useAppDispatch()

    const score = useAppSelector<BoxScoreApi>(state => state.league.boxScore)
    const configFile = useConfigFile()
    console.log(configFile)
    
    useEffect(() => {
        if (slug && discipline) {
            dispatch(leagueThunks.getBoxScore({leagueName: discipline, slug}))
        }
    }, [dispatch, slug, discipline]);

    if (!score || !score.home_team || !score.visitor_team) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.score__container}>
            <p className={styles.score__title}>GAME STATS</p>

            <div className={styles.stats__container}>
                <div className={styles.stats__team}>
                    <img className={styles.team__logo} src={score.home_team.team_logo} alt="logo"/>
                    <p className={styles.team__title}>
                        <TeamName name={score.home_team.name}/>
                    </p>
                </div>

                <div className={styles.stats__stats_container}>
                    {configFile.map((el, index) => <Fragment key={index}>


                        {el.isValueAsCollection
                            ? <div className={styles.stats__team_score}>
                                <p className={styles.stats__field_goals}>
                                    <span
                                        className={styles.stats__points}>{el.valueVisitors[0]}/{el.valueVisitors[1]}</span>
                                    <span>{(el.valueVisitors[2] * 100).toFixed(1)}%</span>
                                </p>
                                <p style={{color: "#757575", fontSize: '11px', fontWeight: 500}}>{el.name}</p>
                                <p className={styles.stats__field_goals}>
                                    <span
                                        className={styles.stats__points}>{el.valueHome[0]}/{el.valueHome[1]}</span>
                                    <span>{(el.valueHome[2] * 100).toFixed(1)}%</span>
                                </p>
                            </div>
                            : <div></div>}


                    </Fragment>)}
                </div>

                <div className={styles.stats__team}>
                    <p className={styles.team__title}>
                        <TeamName name={score.visitor_team.name}/>
                    </p>
                    <img className={styles.team__logo} src={score.visitor_team.team_logo} alt="logo"/>
                </div>
            </div>


            <div>
                <div className={styles.stats__stats_container}>


                    {/*<div className={styles.stats__team_score}>*/}
                    {/*    <p className={styles.stats__field_goals}>*/}
                    {/*        <span className={styles.stats__points}>*/}
                    {/*            {score.box_score.home_team_stats.three_point_field_goals}/*/}
                    {/*            {score.box_score.home_team_stats.three_point_field_goal_attempts}*/}
                    {/*        </span>*/}
                    {/*        <span>{score.box_score.home_team_stats.three_point_field_goals_percentage * 100}%</span>*/}
                    {/*    </p>*/}
                    {/*    <p style={{color: "#757575", fontSize: '11px', fontWeight: 500}}>3-Point FGs</p>*/}
                    {/*    <p className={styles.stats__field_goals}>*/}
                    {/*        <span className={styles.stats__points}>*/}
                    {/*            {score.box_score.visitor_team_stats.three_point_field_goals}/*/}
                    {/*            {score.box_score.visitor_team_stats.three_point_field_goal_attempts}*/}
                    {/*        </span>*/}
                    {/*        <span>{(score.box_score.visitor_team_stats.three_point_field_goals_percentage * 100).toFixed(1)}%</span>*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    {/*<div className={styles.stats__team_score}>*/}
                    {/*    <p className={styles.stats__field_goals}>*/}
                    {/*        <span className={styles.stats__points}>*/}
                    {/*            {score.box_score.home_team_stats.field_goals}/*/}
                    {/*            {score.box_score.home_team_stats.field_goal_attempts}*/}
                    {/*        </span>*/}
                    {/*        <span>{score.box_score.home_team_stats.field_goals_percentage * 100}%</span>*/}
                    {/*    </p>*/}
                    {/*    <p style={{color: "#757575", fontSize: '11px', fontWeight: 500}}>Free Throws</p>*/}
                    {/*    <p className={styles.stats__field_goals}>*/}
                    {/*        <span className={styles.stats__points}>*/}
                    {/*            {score.box_score.visitor_team_stats.field_goals}/*/}
                    {/*            {score.box_score.visitor_team_stats.field_goal_attempts}*/}
                    {/*        </span>*/}
                    {/*        <span>{(score.box_score.visitor_team_stats.field_goals_percentage * 100).toFixed()}%</span>*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    {/*<div className={styles.stats__team_score}>*/}
                    {/*    <p className={styles.stats__field_goals}>*/}
                    {/*        <span>{score.box_score.home_team_stats.personal_fouls}</span>*/}
                    {/*    </p>*/}
                    {/*    <p style={{color: "#757575", fontSize: '11px', fontWeight: 500}}>Personal Fouls</p>*/}
                    {/*    <p className={styles.stats__field_goals}>*/}
                    {/*        <span>{score.box_score.visitor_team_stats.personal_fouls}</span>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};