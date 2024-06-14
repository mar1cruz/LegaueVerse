// // interface Team {
// //     id: number;
// //     name: string;
// //     conference: string;
// //     division: string;
// //     team_logo: string;
// // }
// //
// // export interface TeamStats {
// //     team: Team;
// //     wins: number;
// //     losses: number;
// //     winning_percentage: number;
// //     points_percentage_game: number;
// //     games_back: string;
// //     oop_points_percentage_game: number;
// // }
// //
// // export type StandingsType = {
// //     [conference: string]: TeamStats[];
// // }
//
// // const initialState = {
// //     Eastern: [],
// //     Western: []
// // }
//
//
// type ActionType = GetStandingsActionType
//
//
// export const standingsReducer = (state: StandingsType = initialState, action: ActionType): StandingsType => {
//     switch (action.type) {
//         case "GET-STANDINGS": {
//             return action.standings
//         }
//
//         default:
//             return state
//     }
// }
//

export const initialState = {}