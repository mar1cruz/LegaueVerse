export type TeamType = {
    id: number;
    name: string;
    conference: string;
    division: string;
};

export type DisciplineResponse = {
    id: number;
    logo: string;
    name: string;
};

export interface LeagueResponse {
    id: number;
    logo: string;
    name: string;
}

export interface Team {
    id: number;
    name: string;
    conference: string;
    division: string;
    team_logo: string;
}

export type Disciplines = {
    id: number;
    logo: string;
    name: string;
    image: string;
};

export type BoxScoreApi = {
    date: string;
    visitor_team: Team;
    visitor_pts: number;
    home_team: Team;
    home_pts: number;
    time: string;
    status: string;
    arena: string;
    type: string;
    box_score: box_score[]
};

export type box_score = {
    name: string;
    visitor_value: number | number[];
    home_value: number | number[];
}

export interface StandingsType {
    [conference: string]: NbaTeamStats[] | NhlTeamStats[];
}

export interface NbaTeamStats {
    team: Team;
    wins: number;
    losses: number;
    winning_percentage: number;
    points_percentage_game: number;
    games_back: string;
    oop_points_percentage_game: number;
}

export type NhlTeamStats = Pick<NbaTeamStats, "wins" | "losses" | "team"> & {
    "games_played": number
    "num_of_overtime_losses": number
    "total_points": number
    "points_percentage": number
    "goals_for": number
    "goals_against": number
    "wins_of_regulation": number
}

export interface MatchesAPIType {
    id: number;
    date: string;
    visitor_team: Team;
    visitor_pts: number;
    home_team: Team;
    home_pts: number;
    slug: string;
}

export type Schedule = {
    date: string
    games: {
        id: number;
        date: string;
        visitor_team: Team;
        visitor_pts: number;
        home_team: Team;
        home_pts: number;
        slug: string;
        time: string,
        arena: string,
        type: string
    }[]
}

export interface CommandStats {
    team: string;
    value: number;
}

export interface StatsType {
    [conference: string]: CommandStats[];
}

export type Leagues = Disciplines & {
    teams: Team[];
    standings: StandingsType;
    schedule: Schedule[]
    matchesDates: string[];
    matchesOfDay: MatchesAPIType[];
    boxScore: BoxScoreApi;
    stats: StatsType
};
