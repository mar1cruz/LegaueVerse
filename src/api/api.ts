import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
})

export const leaguesApi = {
    getDisciplines: () => {
        return instance.get('/');
    },
    getLeague: (leagueName: string) => {
        console.log(instance.getUri({url: `/${leagueName}/`}))
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
        return instance.get(`/${leagueName}/${slug}/`);
    },
    getStats: (leagueName: string) => {
        return instance.get(`/${leagueName}/stats/`);
    }
}