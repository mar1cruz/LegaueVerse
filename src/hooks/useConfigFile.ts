// import {useAppSelector} from "../store/store";
// import {BoxScoreApi, BoxScoreBasketball, BoxScoreNHL} from "../store/types";
// import {generateStatsName} from "../utils/generateStatsName";
// import {useParams} from "react-router-dom";
//
// export type EnhancedBasketBallStats = {
//     id: number;
//     free: number[];
//     three: number[];
//     field: number[];
//     assists: number;
//     blocks: number;
//     steals: number;
//     turnovers: number;
//     total_rebounds: number;
//     personal_fouls: number;
//     offensive_rebounds: number;
// };
//
// const enhanceBasketBallStats = (stats: BoxScoreBasketball): EnhancedBasketBallStats => {
//     const {id, assists, blocks, steals, turnovers, personal_fouls, offensive_rebounds, total_rebounds, ...rest} = stats;
//     const fieldsKeys = Object.keys(rest).filter(key => key.startsWith('field'));
//     const freeKeys = Object.keys(rest).filter(key => key.startsWith('free'));
//     const threeKeys = Object.keys(rest).filter(key => key.startsWith('three'));
//
//     return {
//         id,
//         field: fieldsKeys.map(key => stats[key as keyof BoxScoreBasketball] as number),
//         three: threeKeys.map(key => stats[key as keyof BoxScoreBasketball] as number),
//         free: freeKeys.map(key => stats[key as keyof BoxScoreBasketball] as number),
//         personal_fouls,
//         total_rebounds,
//         offensive_rebounds,
//         turnovers,
//
//         assists,
//         blocks,
//         steals,
//     };
// };
//
// export type ConfigFileItem = {
//     name: string;
//     valueHome: number | string | number[];
//     valueVisitors: number | string | number[];
//     isValueAsCollection: boolean;
// };
//
// export const useConfigFile = (): ConfigFileItem[] => {
//     const {discipline} = useParams<{ discipline: string | undefined }>();
//
//     const score = useAppSelector<BoxScoreApi>(state => state.league.boxScore);
//     const configFile: ConfigFileItem[] = [];
//     const headerName = generateStatsName(discipline);
//
//     if (score.box_score && headerName) {
//         let homeTeam: BoxScoreBasketball | EnhancedBasketBallStats | BoxScoreNHL = score.box_score.home_team_stats;
//         let visitorTeam: BoxScoreBasketball | EnhancedBasketBallStats | BoxScoreNHL = score.box_score.visitor_team_stats;
//
//         if (discipline === 'nba' && 'assists' in homeTeam) {
//             homeTeam = enhanceBasketBallStats(homeTeam as BoxScoreBasketball);
//             visitorTeam = enhanceBasketBallStats(visitorTeam as BoxScoreBasketball);
//         }
//
//         const boxScoreHomeTeam = Object.entries(homeTeam);
//         const boxScoreVisitorTeam = Object.entries(visitorTeam);
//
//         boxScoreHomeTeam.forEach(([key, value], index) => {
//             configFile.push({
//                 name: headerName[key as keyof typeof headerName],
//                 valueHome: value,
//                 valueVisitors: boxScoreVisitorTeam[index][1],
//                 isValueAsCollection: Array.isArray(value),
//             });
//         });
//     }
//
//     return configFile;
// };

export const a = {}