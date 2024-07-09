import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {leagueThunks} from "../../store/leagueSlice";
import {useParams} from "react-router-dom";
import styles from './Schedule.module.scss';
import dayjs from "dayjs";
import TeamName from "../../components/TeamName/TeamName";
import {ScheduleResponse} from "../../api/types";

const Schedule = () => {
    const {discipline} = useParams<{ discipline: string | undefined }>();
    const dispatch = useAppDispatch();
    const schedule = useAppSelector<ScheduleResponse[]>(state => state.league.schedule);


    useEffect(() => {
        if (discipline) {
            dispatch(leagueThunks.getSchedule({leagueName: discipline}));
        }
    }, [dispatch, discipline]);

    return (
        <div className={styles.schedule__container}>
            {schedule?.map((schedul, index) => (
                <div key={index} className={styles.schedule__wrapper}>
                    <p className={styles.schedule__date}>{dayjs(schedul.date).format('ddd, MMM DD')}</p>
                    <div className={styles.schedule__header}>
                        <p>MATCHUP</p>
                        <p className={styles.schedule__info_title}>STATUS</p>
                        <p className={styles.schedule__info_title}>LOCATION</p>
                        <p className={styles.schedule__info_title}>TIME</p>
                    </div>

                    {schedul.games?.map((sc, idx) => (
                        <div key={idx} className={styles.schedule__info_container}>
                            <div className={styles.team__container}>
                                <div className={styles.team}>
                                    <img src={sc.visitor_team.team_logo} alt='logo'/>
                                    <p><TeamName name={sc.visitor_team.name} className='schedule__team_name'/></p>
                                </div>
                                <div className={styles.team__vs}>@</div>
                                <div className={styles.team}>
                                    <p><TeamName name={sc.home_team.name} className='schedule__team_name'/></p>
                                    <img src={sc.home_team.team_logo} alt='logo'/>
                                </div>
                            </div>
                            <p className={styles.schedule__info_value}>{sc.type}</p>
                            <p className={styles.schedule__info_value}>{sc.arena.length === 0 ? '-' : sc.arena}</p>
                            <p className={styles.schedule__info_value}>{sc.time}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Schedule;
