import { useAppSelector } from "../store/store";
import { BoxScoreApi, BoxScoreStats } from "../store/types";
import { generateStatsName } from "../utils/generateStatsName";
import { useParams } from "react-router-dom";

export type EnhancedBasketBallStats = {
    assists: number,
    blocks: number,
    steals: number,
    turnovers: number,
    total_rebounds: number,
    personal_fouls: number,
    offensive_rebounds: number,
    free: number[],
    three: number[],
    field: number[]
}

const enhanceBasketBallStats = (stats: BoxScoreStats): EnhancedBasketBallStats => {
    const { assists, blocks, steals, turnovers, personal_fouls, offensive_rebounds, total_rebounds, ...rest } = stats;
    const fieldsKeys = Object.keys(rest).filter(key => key.startsWith('field'));
    const freeKeys = Object.keys(rest).filter(key => key.startsWith('free'));
    const threeKeys = Object.keys(rest).filter(key => key.startsWith('three'));

    return {
        assists,
        blocks,
        personal_fouls,
        steals,
        offensive_rebounds,
        turnovers,
        total_rebounds,
        field: fieldsKeys.map(key => stats[key as keyof BoxScoreStats] as number),
        three: threeKeys.map(key => stats[key as keyof BoxScoreStats] as number),
        free: freeKeys.map(key => stats[key as keyof BoxScoreStats] as number),
    };
}

export type ConfigFileItem = {
    name: string,
    valueHome: number | string | number[],
    valueVisitors: number | string | number[],
    isValueAsCollection: boolean
}

export const useConfigFile = (): ConfigFileItem[] => {
    const { discipline } = useParams<{ discipline: string | undefined }>();

    const score = useAppSelector<BoxScoreApi>(state => state.league.boxScore);
    const configFile: ConfigFileItem[] = [];
    const headerName = generateStatsName(discipline);

    if (score.box_score && headerName) {
        let homeTeam: BoxScoreStats | EnhancedBasketBallStats = score.box_score.home_team_stats;
        let visitorTeam: BoxScoreStats | EnhancedBasketBallStats = score.box_score.visitor_team_stats;

        if (discipline === 'nba') {
            homeTeam = enhanceBasketBallStats(homeTeam);
            visitorTeam = enhanceBasketBallStats(visitorTeam);
        }

        const boxScoreHomeTeam = Object.entries(homeTeam);
        const boxScoreVisitorTeam = Object.entries(visitorTeam);

        boxScoreHomeTeam.forEach(([key, value], index) => {
            configFile.push({
                name: headerName[key as keyof typeof headerName],
                valueHome: value,
                valueVisitors: boxScoreVisitorTeam[index][1],
                isValueAsCollection: Array.isArray(value)
            });
        });
    }

    return configFile;
};
