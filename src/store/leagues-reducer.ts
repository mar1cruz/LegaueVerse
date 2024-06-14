import nba from './../assets/Main/basketball-header.jpg'
import nbaLogo from './../assets/Main/nba.png'

import nhl from './../assets/Main/nhl-header.jpg'
import nhlLogo from './../assets/Main/nhl.png'

const links = [
    {url: 'https://www.youtube.com/', name: '1'},
    {url: 'https://www.google.com/', name: '2'},
    {url: 'https://www.yandex.com/', name: '3'},
    {url: 'https://liquipedia.net/', name: '4'},
    {url: 'https://www.foxsports.com/', name: '5'}
]
export type TeamsType = {
    id: number
    name: string,
    conference: string,
    division: string
}
export type LinkType = {
    url: string
    name: string
}

interface Team {
    id: number;
    name: string;
    conference: string;
    division: string;
    team_logo: string;
}

export interface TeamStats {
    team: Team;
    wins: number;
    losses: number;
    winning_percentage: number;
    points_percentage_game: number;
    games_back: string;
    oop_points_percentage_game: number;
}

export type StandingsType = {
    [conference: string]: TeamStats[];
}

export interface MatchesAPIType {
    visitor_team: Team
    visitor_pts: string
    home_team: Team
    home_pts: string
    status: string
}

export type LeaguesType = {
    name: string
    url: string
    image: string
    imageLogo: string
    links: LinkType[]
    teams: TeamsType[]
    standings: StandingsType
    matchesDates: string[]
    matchesOfDay: MatchesAPIType[]
}

type ActionType = SetTeamActionType | GetStandingsActionType | SetMatchesActionType | SetPlayingDaysActionType

const initialState = [
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: [],
        standings: {},
        matchesDates: [],
        matchesOfDay: []
    },
    {
        name: 'NBA',
        url: 'nba',
        imageLogo: nbaLogo,
        image: nba,
        links: links,
        teams: [],
        standings: {},
        matchesDates: [],
        matchesOfDay: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: [],
        standings: {},
        matchesDates: [],
        matchesOfDay: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: [],
        standings: {},
        matchesDates: [],
        matchesOfDay: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: [],
        standings: {},
        matchesDates: [],
        matchesOfDay: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: [],
        standings: {},
        matchesDates: [],
        matchesOfDay: []
    },
]

export const disciplineReducer = (state: LeaguesType[] = initialState, action: ActionType): LeaguesType[] => {
    switch (action.type) {
        case "SET-TEAM": {
            const teamsAPI = [
                {
                    id: 1,
                    name: "Chicago Bulls",
                    conference: "Eastern",
                    division: "Central"
                },
                {
                    id: 2,
                    name: "Boston Celtics",
                    conference: "Eastern",
                    division: "Atlantic"
                },
                {
                    id: 3,
                    name: "New York Knicks",
                    conference: "Eastern",
                    division: "Atlantic"

                },
                {
                    id: 4,
                    name: "Philadelphia 76ers",
                    conference: "Eastern",
                    division: "Atlantic"

                },
                {
                    id: 5,
                    name: "Brooklyn Nets",
                    conference: "Eastern",
                    division: "Atlantic"

                },
                {
                    id: 6,
                    name: "Toronto Raptors",
                    conference: "Eastern",
                    division: "Atlantic"

                },
                {
                    id: 7,
                    name: "Milwaukee Bucks",
                    conference: "Eastern",
                    division: "Central"

                },
                {
                    id: 8,
                    name: "Cleveland Cavaliers",
                    conference: "Eastern",
                    division: "Central"

                },
                {
                    id: 9,
                    name: "Indiana Pacers",
                    conference: "Eastern",
                    division: "Central"

                },
                {
                    id: 10,
                    name: "Detroit Pistons",
                    conference: "Eastern",
                    division: "Central"

                },
                {
                    id: 11,
                    name: "Orlando Magic",
                    conference: "Eastern",
                    division: "Southheast"

                },
                {
                    id: 12,
                    name: "Miami Heat",
                    conference: "Eastern",
                    division: "Southheast"

                },
                {
                    id: 13,
                    name: "Atlanta Hawks",
                    conference: "Eastern",
                    division: "Southheast"

                },
                {
                    id: 14,
                    name: "Charlotte Hornets",
                    conference: "Eastern",
                    division: "Southheast"

                },
                {
                    id: 15,
                    name: "Washington Wizards",
                    conference: "Eastern",
                    division: "Southheast"

                },
                {
                    id: 16,
                    name: "Oklahoma City Thunder",
                    conference: "Western",
                    division: "Northwest"

                },
                {
                    id: 17,
                    name: "Denver Nuggets",
                    conference: "Western",
                    division: "Northwest"

                },
                {
                    id: 18,
                    name: "Minnesota Timberwolves",
                    conference: "Western",
                    division: "Northwest"

                },
                {
                    id: 19,
                    name: "Utah Jazz",
                    conference: "Western",
                    division: "Northwest"

                },
                {
                    id: 20,
                    name: "Portland Trail Blazers",
                    conference: "Western",
                    division: "Northwest"

                },
                {
                    id: 22,
                    name: "Phoenix Suns",
                    conference: "Western",
                    division: "Pacific"

                },
                {
                    id: 23,
                    name: "Los Angeles Lakers",
                    conference: "Western",
                    division: "Pacific"

                },
                {
                    id: 24,
                    name: "Sacramento Kings",
                    conference: "Western",
                    division: "Pacific"

                },
                {
                    id: 25,
                    name: "Golden State Warriors",
                    conference: "Western",
                    division: "Pacific"

                },
                {
                    id: 26,
                    name: "Dallas Mavericks",
                    conference: "Western",
                    division: "Southwest"

                },
                {
                    id: 27,
                    name: "New Orleans Pelicans",
                    conference: "Western",
                    division: "Southwest"

                },
                {
                    id: 28,
                    name: "Houston Rockets",
                    conference: "Western",
                    division: "Southwest"

                },
                {
                    id: 29,
                    name: "Memphis Grizzlies",
                    conference: "Western",
                    division: "Southwest"

                },
                {
                    id: 30,
                    name: "San Antonio Spurs",
                    conference: "Western",
                    division: "Southwest"

                },
                {
                    id: 21,
                    name: "Los Angeles Clippers",
                    conference: "Western",
                    division: "Pacific"

                }
            ]
            return state.map(t => t.name.toLowerCase() === action.teamName ? {...t, teams: teamsAPI} : t)
        }
        case "SET-STANDINGS": {
            return state.map((league) => league.name === action.name ? {
                ...league,
                standings: action.standings
            } : league)
        }
        case 'SET-MATCHES': {
            console.log(action.leagueName)
            return state.map((l) => l.name.toUpperCase() === action.leagueName?.toUpperCase()
                ? {...l, matchesOfDay: action.matches}
                : l)
        }
        case "SET-PLAYING-DAYS": {
            return state.map((l) => l.name.toUpperCase() === action.leagueName?.toUpperCase()
                ? {...l, matchesDates: action.days}
                : l)
        }
        default:
            return state;
    }
}

type SetTeamActionType = ReturnType<typeof setTeamAC>
export const setTeamAC = (teamName: string) => {
    return {type: 'SET-TEAM', teamName} as const
}

type GetStandingsActionType = ReturnType<typeof setStandingsAC>
export const setStandingsAC = (name: string, standings: StandingsType = standingsAPI) => {
    return {type: 'SET-STANDINGS', standings, name} as const
}

type SetMatchesActionType = ReturnType<typeof setMatchesAC>
export const setMatchesAC = (matches: MatchesAPIType[] = matchesAPI, leagueName: string | undefined) => {
    return {type: 'SET-MATCHES', matches, leagueName} as const
}

type SetPlayingDaysActionType = ReturnType<typeof setPlayingDaysAC>
export const setPlayingDaysAC = (days: string[] = daysAPI, leagueName: string | undefined) => {
    return {type: 'SET-PLAYING-DAYS', days, leagueName} as const
}

const matchesAPI: MatchesAPIType[] = [
    {
        visitor_team: {
            id: 26,
            name: "Dallas Mavericks",
            conference: "Western",
            division: "Southwest",
            team_logo: "http://127.0.0.1:8000/media/logos/nba/dallas-mavericks-logo.png"
        },
        visitor_pts: "124",
        home_team: {
            id: 18,
            name: "Minnesota Timberwolves",
            conference: "Western",
            division: "Northwest",
            team_logo: "http://127.0.0.1:8000/media/logos/nba/minnesota-timberwolves-logo.png"
        },
        home_pts: "103",
        status: "Finished"
    },
    {
        visitor_team: {
            id: 26,
            name: "Dallas Mavericks",
            conference: "Western",
            division: "Southwest",
            team_logo: "http://127.0.0.1:8000/media/logos/nba/dallas-mavericks-logo.png"
        },
        visitor_pts: "124",
        home_team: {
            id: 18,
            name: "Minnesota Timberwolves",
            conference: "Western",
            division: "Northwest",
            team_logo: "http://127.0.0.1:8000/media/logos/nba/minnesota-timberwolves-logo.png"
        },
        home_pts: "103",
        status: "Finished"
    }, {
        visitor_team: {
            id: 26,
            name: "Dallas Mavericks",
            conference: "Western",
            division: "Southwest",
            team_logo: "http://127.0.0.1:8000/media/logos/nba/dallas-mavericks-logo.png"
        },
        visitor_pts: "124",
        home_team: {
            id: 18,
            name: "Minnesota Timberwolves",
            conference: "Western",
            division: "Northwest",
            team_logo: "http://127.0.0.1:8000/media/logos/nba/minnesota-timberwolves-logo.png"
        },
        home_pts: "103",
        status: "Finished"
    }]

const standingsAPI = {
    "Eastern": [
        {
            "team": {
                "id": 2,
                "name": "Boston Celtics",
                "conference": "Eastern",
                "division": "Atlantic",
                "team_logo": "/media/logos/nba/boston-celtics-logo.png"
            },
            "wins": 64,
            "losses": 18,
            "winning_percentage": 0.78,
            "points_percentage_game": 120.6,
            "games_back": "—",
            "oop_points_percentage_game": 109.2
        },
        {
            "team": {
                "id": 3,
                "name": "New York Knicks",
                "conference": "Eastern",
                "division": "Atlantic",
                "team_logo": "/media/logos/nba/new-york-knicks-logo.png"
            },
            "wins": 50,
            "losses": 32,
            "winning_percentage": 0.61,
            "points_percentage_game": 112.8,
            "games_back": "14.0",
            "oop_points_percentage_game": 108.2
        },
        {
            "team": {
                "id": 7,
                "name": "Milwaukee Bucks",
                "conference": "Eastern",
                "division": "Central",
                "team_logo": "/media/logos/nba/Milwaukee-Bucks-Logo.png"
            },
            "wins": 49,
            "losses": 33,
            "winning_percentage": 0.598,
            "points_percentage_game": 119.0,
            "games_back": "15.0",
            "oop_points_percentage_game": 116.4
        },
        {
            "team": {
                "id": 8,
                "name": "Cleveland Cavaliers",
                "conference": "Eastern",
                "division": "Central",
                "team_logo": "/media/logos/nba/cleveland-cavaliers-logo.png"
            },
            "wins": 48,
            "losses": 34,
            "winning_percentage": 0.585,
            "points_percentage_game": 112.6,
            "games_back": "16.0",
            "oop_points_percentage_game": 110.2
        },
        {
            "team": {
                "id": 11,
                "name": "Orlando Magic",
                "conference": "Eastern",
                "division": "Southheast",
                "team_logo": "/media/logos/nba/orlando-magic-logo.png"
            },
            "wins": 47,
            "losses": 35,
            "winning_percentage": 0.573,
            "points_percentage_game": 110.5,
            "games_back": "17.0",
            "oop_points_percentage_game": 108.4
        },
        {
            "team": {
                "id": 9,
                "name": "Indiana Pacers",
                "conference": "Eastern",
                "division": "Central",
                "team_logo": "/media/logos/nba/indiana-pacers-logo.png"
            },
            "wins": 47,
            "losses": 35,
            "winning_percentage": 0.573,
            "points_percentage_game": 123.3,
            "games_back": "17.0",
            "oop_points_percentage_game": 120.2
        },
        {
            "team": {
                "id": 4,
                "name": "Philadelphia 76ers",
                "conference": "Eastern",
                "division": "Atlantic",
                "team_logo": "/media/logos/nba/philadelphia-76ers-logo.png"
            },
            "wins": 47,
            "losses": 35,
            "winning_percentage": 0.573,
            "points_percentage_game": 114.6,
            "games_back": "17.0",
            "oop_points_percentage_game": 111.5
        },
        {
            "team": {
                "id": 12,
                "name": "Miami Heat",
                "conference": "Eastern",
                "division": "Southheast",
                "team_logo": "/media/logos/nba/Miami-Heat-logo.png"
            },
            "wins": 46,
            "losses": 36,
            "winning_percentage": 0.561,
            "points_percentage_game": 110.1,
            "games_back": "18.0",
            "oop_points_percentage_game": 108.4
        },
        {
            "team": {
                "id": 1,
                "name": "Chicago Bulls",
                "conference": "Eastern",
                "division": "Central",
                "team_logo": "/media/logos/nba/chicago-bulls-logo.png"
            },
            "wins": 39,
            "losses": 43,
            "winning_percentage": 0.476,
            "points_percentage_game": 112.3,
            "games_back": "25.0",
            "oop_points_percentage_game": 113.7
        },
        {
            "team": {
                "id": 13,
                "name": "Atlanta Hawks",
                "conference": "Eastern",
                "division": "Southheast",
                "team_logo": "/media/logos/nba/atlanta-hawks-logo.png"
            },
            "wins": 36,
            "losses": 46,
            "winning_percentage": 0.439,
            "points_percentage_game": 118.3,
            "games_back": "28.0",
            "oop_points_percentage_game": 120.5
        },
        {
            "team": {
                "id": 5,
                "name": "Brooklyn Nets",
                "conference": "Eastern",
                "division": "Atlantic",
                "team_logo": "/media/logos/nba/brooklyn-nets-logo.png"
            },
            "wins": 32,
            "losses": 50,
            "winning_percentage": 0.39,
            "points_percentage_game": 110.4,
            "games_back": "32.0",
            "oop_points_percentage_game": 113.3
        },
        {
            "team": {
                "id": 6,
                "name": "Toronto Raptors",
                "conference": "Eastern",
                "division": "Atlantic",
                "team_logo": "/media/logos/nba/toronto-raptors-logo.png"
            },
            "wins": 25,
            "losses": 57,
            "winning_percentage": 0.305,
            "points_percentage_game": 112.4,
            "games_back": "39.0",
            "oop_points_percentage_game": 118.8
        },
        {
            "team": {
                "id": 14,
                "name": "Charlotte Hornets",
                "conference": "Eastern",
                "division": "Southheast",
                "team_logo": "/media/logos/nba/charlotte-hornets-logo.png"
            },
            "wins": 21,
            "losses": 61,
            "winning_percentage": 0.256,
            "points_percentage_game": 106.6,
            "games_back": "43.0",
            "oop_points_percentage_game": 116.8
        },
        {
            "team": {
                "id": 15,
                "name": "Washington Wizards",
                "conference": "Eastern",
                "division": "Southheast",
                "team_logo": "/media/logos/nba/washington-wizards-logo.png"
            },
            "wins": 15,
            "losses": 67,
            "winning_percentage": 0.183,
            "points_percentage_game": 113.7,
            "games_back": "49.0",
            "oop_points_percentage_game": 123.0
        },
        {
            "team": {
                "id": 10,
                "name": "Detroit Pistons",
                "conference": "Eastern",
                "division": "Central",
                "team_logo": "/media/logos/nba/detroit-pistons-logo.png"
            },
            "wins": 14,
            "losses": 68,
            "winning_percentage": 0.171,
            "points_percentage_game": 109.9,
            "games_back": "50.0",
            "oop_points_percentage_game": 119.0
        }
    ],
    "Western": [
        {
            "team": {
                "id": 16,
                "name": "Oklahoma City Thunder",
                "conference": "Western",
                "division": "Northwest",
                "team_logo": "/media/logos/nba/oklahoma-city-thunder-nba-logo.png"
            },
            "wins": 57,
            "losses": 25,
            "winning_percentage": 0.695,
            "points_percentage_game": 120.1,
            "games_back": "—",
            "oop_points_percentage_game": 112.7
        },
        {
            "team": {
                "id": 17,
                "name": "Denver Nuggets",
                "conference": "Western",

                "division": "Northwest",
                "team_logo": "/media/logos/nba/denver-nuggets-intl-logo.png"
            },
            "wins": 57,
            "losses": 25,
            "winning_percentage": 0.695,
            "points_percentage_game": 114.9,
            "games_back": "—",
            "oop_points_percentage_game": 109.6
        },
        {
            "team": {
                "id": 18,
                "name": "Minnesota Timberwolves",
                "conference": "Western",
                "division": "Northwest",
                "team_logo": "/media/logos/nba/minnesota-timberwolves-logo.png"
            }
            ,
            "wins": 56,
            "losses": 26,
            "winning_percentage": 0.683,
            "points_percentage_game": 113.0,
            "games_back": "1.0",
            "oop_points_percentage_game": 106.5
        },
        {
            "team": {
                "id": 21,
                "name": "Los Angeles Clippers",
                "conference": "Western",
                "division": "Pacific",
                "team_logo": "/media/logos/nba/la-clippers-logo.png"
            }
            ,
            "wins": 51,
            "losses": 31,
            "winning_percentage": 0.622,
            "points_percentage_game": 115.6,
            "games_back": "6.0",
            "oop_points_percentage_game": 112.3
        },
        {
            "team": {
                "id": 26,
                "name": "Dallas Mavericks",
                "conference": "Western",
                "division": "Southwest",
                "team_logo": "/media/logos/nba/dallas-mavericks-logo.png"
            }
            ,
            "wins": 50,
            "losses": 32,
            "winning_percentage": 0.61,
            "points_percentage_game": 117.9,
            "games_back": "7.0",
            "oop_points_percentage_game": 115.6
        },
        {
            "team": {
                "id": 22,
                "name": "Phoenix Suns",
                "conference": "Western",
                "division": "Pacific",
                "team_logo": "/media/logos/nba/phoenix-suns-logo.png"
            }
            ,
            "wins": 49,
            "losses": 33,
            "winning_percentage": 0.598,
            "points_percentage_game": 116.2,
            "games_back": "8.0",
            "oop_points_percentage_game": 113.2
        },
        {
            "team": {
                "id": 27,
                "name": "New Orleans Pelicans",
                "conference": "Western",
                "division": "Southwest",
                "team_logo": "/media/logos/nba/new-orleans-pelicans-logo.png"
            }
            ,
            "wins": 49,
            "losses": 33,
            "winning_percentage": 0.598,
            "points_percentage_game": 115.1,
            "games_back": "8.0",
            "oop_points_percentage_game": 110.7
        },
        {
            "team": {
                "id": 23,
                "name": "Los Angeles Lakers",
                "conference": "Western",
                "division": "Pacific",
                "team_logo": "/media/logos/nba/los-angeles-lakers-logo.png"
            }
            ,
            "wins": 47,
            "losses": 35,
            "winning_percentage": 0.573,
            "points_percentage_game": 118.0,
            "games_back": "10.0",
            "oop_points_percentage_game": 117.4
        },
        {
            "team": {
                "id": 24,
                "name": "Sacramento Kings",
                "conference": "Western",
                "division": "Pacific",
                "team_logo": "/media/logos/nba/sacramento-kings-logo.png"
            }
            ,
            "wins": 46,
            "losses": 36,
            "winning_percentage": 0.561,
            "points_percentage_game": 116.6,
            "games_back": "11.0",
            "oop_points_percentage_game": 114.8
        },
        {
            "team": {
                "id": 25,
                "name": "Golden State Warriors",
                "conference": "Western",
                "division": "Pacific",
                "team_logo": "/media/logos/nba/Golden-State-Warriors-Logo.png"
            }
            ,
            "wins": 46,
            "losses": 36,
            "winning_percentage": 0.561,
            "points_percentage_game": 117.8,
            "games_back": "11.0",
            "oop_points_percentage_game": 115.2
        },
        {
            "team": {
                "id": 28,
                "name": "Houston Rockets",
                "conference": "Western",
                "division": "Southwest",
                "team_logo": "/media/logos/nba/houston-rockets-logo.png"
            }
            ,
            "wins": 41,
            "losses": 41,
            "winning_percentage": 0.5,
            "points_percentage_game": 114.3,
            "games_back": "16.0",
            "oop_points_percentage_game": 113.2
        },
        {
            "team": {
                "id": 19,
                "name": "Utah Jazz",
                "conference": "Western",
                "division": "Northwest",
                "team_logo": "/media/logos/nba/utah-jazz-logo.png"
            }
            ,
            "wins": 31,
            "losses": 51,
            "winning_percentage": 0.378,
            "points_percentage_game": 115.7,
            "games_back": "26.0",
            "oop_points_percentage_game": 120.5
        },
        {
            "team": {
                "id": 29,
                "name": "Memphis Grizzlies",
                "conference": "Western",
                "division": "Southwest",
                "team_logo": "/media/logos/nba/Grizzlies-Logo.png"
            }
            ,
            "wins": 27,
            "losses": 55,
            "winning_percentage": 0.329,
            "points_percentage_game": 105.8,
            "games_back": "30.0",
            "oop_points_percentage_game": 112.8
        },
        {
            "team": {
                "id": 30,
                "name": "San Antonio Spurs",
                "conference": "Western",
                "division": "Southwest",
                "team_logo": "/media/logos/nba/spurs_logo.png"
            }
            ,
            "wins": 22,
            "losses": 60,
            "winning_percentage": 0.268,
            "points_percentage_game": 112.1,
            "games_back": "35.0",
            "oop_points_percentage_game": 118.6
        },
        {
            "team": {
                "id": 20,
                "name": "Portland Trail Blazers",
                "conference": "Western",
                "division": "Northwest",
                "team_logo": "/media/logos/nba/portland-trail-blazers-logo.png"
            }
            ,
            "wins": 21,
            "losses": 61,
            "winning_percentage": 0.256,
            "points_percentage_game": 106.4,
            "games_back": "36.0",
            "oop_points_percentage_game": 115.4
        }
    ],
}

const daysAPI = [
    '2024-05-10',
    '2024-05-11',
    '2024-05-12',
    '2024-06-13',
    '2024-06-12',
    '2024-06-11',
    '2024-06-6',
    '2024-06-2',
    '2024-06-1',
]

// {
//     visitor_team:
//     {
//         id: 18,
//             name: "Minnesota Timberwolves",
//         conference: "Western",
//         division: "Northwest",
//         team_logo: "http://127.0.0.1:8000/media/logos/nba/minnesota-timberwolves-logo.png"
//
//     },
//     visitor_pts: "105",
//         home_team:
//     {
//         id: 26,
//             name: "Dallas Mavericks",
//         conference: "Western",
//         division: "Southwest",
//         team_logo: "http://127.0.0.1:8000/media/logos/nba/dallas-mavericks-logo.png"
//
//     },
//     home_pts: "100",
//         status: "Finished"
// },
