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

const initialState = [
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: []
    },
    {
        name: 'NBA',
        url: 'nba',
        imageLogo: nbaLogo,
        image: nba,
        links: links,
        teams: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: []
    },
    {
        name: 'NHL',
        url: 'nhl',
        imageLogo: nhlLogo,
        image: nhl,
        links: links,
        teams: []
    },
]

export type LinkType = {
    url: string
    name: string
}

export type LeaguesType = {
    name: string
    url: string
    image: string
    imageLogo: string
    links: LinkType[]
    teams: TeamsType[]
}

type ActionType = SetTeamActionType

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
            return state.map(t => t.name.toLowerCase() === action.teamName ? {...t, teams:teamsAPI} : t)
        }

        default:
            return state;
    }
}

type SetTeamActionType = ReturnType<typeof setTeamAC>

export const setTeamAC = (teamName: string) => {
    return {type: 'SET-TEAM', teamName} as const
}


