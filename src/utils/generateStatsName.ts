import {EnhancedBasketBallStats} from "../hooks/useConfigFile";

export const generateStatsName = (discipline: string | undefined) => {
    const nbaOriginalStats = ["Field Goals", "3-Point FGs", "Free Throws", "Personal Fouls", "Total Rebounds",
        "Offensive Rebounds", 'Turnovers', 'Points Off Turnovers', 'Fast Break Points', 'Points In The Paint']

    const nbaStats : Record<keyof EnhancedBasketBallStats, string> = {
        field: "Field Goals",
        three: "3-Point FGs",
        free: "Free Throws",
        personal_fouls: "Personal Fouls",
        total_rebounds: "Total Rebounds",
        offensive_rebounds: "Offensive Rebounds",
        turnovers: 'Turnovers',
        assists: 'Assists',
        blocks: 'Blocks',
        steals: 'Steals'
    }
    const nhlStats = ["Assists", "ESG", "Goals", "Penalties in minutes", "PTS", "PPG", "SP", "SHG", "SOG"]


    switch (discipline) {
        case 'nba':
            return nbaStats;
        /* case 'nhl':
             return nhlStats;*/
    }
}

export const a = {}