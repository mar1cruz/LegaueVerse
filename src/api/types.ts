export type DisciplineResponse = {
    id: number;
    logo: string;
    name: string;
    background: string
};


export type ScoresResponse = {
    id: number;
    date: string;
    home_pts: number;
    home_team: Team;
    slug: string;
    visitor_pts: number;
    visitor_team: Team;
}


export interface StandingsResponse {
    [conference: string]: NbaTeamStats[] | NhlTeamStats[];
}
export interface NbaTeamStats {
    games_back: string;
    losses: number;
    oop_points_percentage_game: number;
    points_percentage_game: number;
    team: Team;
    winning_percentage: number;
    wins: number;
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


export type TeamResponse = Record<string, Team[]>;
export type Team = {
    id: number;
    name: string;
    conference: string;
    division: string;
    team_logo: string;
}


export type BoxScoreResponse = Omit<ScoresResponse, 'id' | 'slug'> & {
    time: string;
    status: string;
    arena: string;
    type: string;
    box_score: BoxScore[]
};
export type BoxScore = {
    name: string;
    visitor_value: number | number[];
    home_value: number | number[];
}


export interface StatsResponse {
    [conference: string]: { team: string, value: number }[];
}


export type ScheduleResponse = {
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