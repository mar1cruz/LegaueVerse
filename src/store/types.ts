import {
    BoxScoreResponse,
    DisciplineResponse,
    ScheduleResponse,
    ScoresResponse,
    StandingsResponse,
    StatsResponse,
    TeamResponse
} from "../api/types";


export type InitialStore = {
    teams: TeamResponse;
    standings: StandingsResponse;
    schedule: ScheduleResponse[]
    matchesDates: string[];
    matchesOfDay: ScoresResponse[];
    boxScore: BoxScoreResponse;
    stats: StatsResponse
};
