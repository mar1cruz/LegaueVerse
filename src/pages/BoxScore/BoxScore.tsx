import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useEffect} from "react";
import {leagueThunks} from "../../store/leagueSlice";
import {BoxScoreApi} from "../../store/types";

export const BoxScore = () => {
    const {slug, discipline} = useParams<{ slug: string | undefined, discipline: string | undefined }>()
    const dispatch = useAppDispatch()

    const score = useAppSelector<BoxScoreApi>(state => state.league.boxScore)

    console.log(score)

    useEffect(() => {
        if (slug && discipline) {
            dispatch(leagueThunks.getBoxScore({leagueName: discipline, slug}))
        }
    }, [dispatch, slug, discipline]);

    return (
        <div>

        </div>
    );
};