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

export type BoxScoreStats = {
    id: number
    field_goals: number
    field_goal_attempts: number
    field_goals_percentage: number
    three_point_field_goals: number
    three_point_field_goal_attempts: number
    three_point_field_goals_percentage: number
    free_throws: number
    free_throw_attempts: number
    free_throw_percentage: number
    personal_fouls: number
    total_rebounds: number
    offensive_rebounds: number
    turnovers: number
    assists: number
    steals: number
    blocks: number
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
    box_score: {
        id: number;
        home_team_stats: BoxScoreStats;
        visitor_team_stats: BoxScoreStats;
    };
};

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

export interface CommandStats {
    team: string;
    value: number;
}

export interface StatsType {
    [conference: string]: CommandStats[];
}

export type Leagues = Disciplines & {
    teams: TeamType[];
    standings: StandingsType;
    matchesDates: string[];
    matchesOfDay: MatchesAPIType[];
    boxScore: BoxScoreApi;
    stats: StatsType
};
