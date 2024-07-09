import {instance} from "./instance";
import {
    BoxScoreResponse,
    DisciplineResponse, ScheduleResponse,
    ScoresResponse,
    StandingsResponse,
    StatsResponse,
    TeamResponse
} from "./types";

export const leaguesApi = {
    getDisciplines: () => {
        return instance.get<DisciplineResponse[]>('/');
    },
    getLeague: (leagueName: string) => {
        return instance.get<DisciplineResponse>(`/${leagueName}/`);
    },
    getScore: (leagueName: string, date: string) => {
        return instance.get<ScoresResponse[]>(`/${leagueName}/scores/`, {
            params: {
                date: date
            }
        });
    },
    getStandings: (leagueName: string) => {
        return instance.get<StandingsResponse>(`/${leagueName}/standings/`);
    },
    getTeams: (leagueName: string) => {
        return instance.get<TeamResponse>(`/${leagueName}/teams/`);
    },
    getMatches: (leagueName: string) => {
        return instance.get<string[]>(`/${leagueName}/games-date/`);
    },
    getBoxScore: (leagueName: string, slug: string) => {
        return instance.get<BoxScoreResponse>(`/${leagueName}/scores/${slug}/`);
    },
    getStats: (leagueName: string) => {
        return instance.get<StatsResponse>(`/${leagueName}/stats/`);
    },
    getSchedule: (leagueName: string) => {
        return instance.get<ScheduleResponse[]>(`/${leagueName}/schedule/`);
    }
}