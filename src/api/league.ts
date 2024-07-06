import {instance} from "./instance";

export const leaguesApi = {
    getDisciplines: () => {
        return instance.get('/');
    },
    getLeague: (leagueName: string) => {
        return instance.get(`/${leagueName}/`);
    },
    getScore: (leagueName: string, date: string) => {
        return instance.get(`/${leagueName}/scores/`, {
            params: {
                date: date
            }
        });
    },
    getStandings: (leagueName: string) => {
        return instance.get(`/${leagueName}/standings/`);
    },
    getTeams: (leagueName: string) => {
        return instance.get(`/${leagueName}/teams/`);
    },
    getMatches: (leagueName: string) => {
        return instance.get(`/${leagueName}/games-date/`);
    },
    getBoxScore: (leagueName: string, slug: string) => {
        return instance.get(`/${leagueName}/scores/${slug}/`);
    },
    getStats: (leagueName: string) => {
        return instance.get(`/${leagueName}/stats/`);
    },
    getSchedule: (leagueName: string) => {
        return instance.get(`/${leagueName}/schedule/`);
    }
}