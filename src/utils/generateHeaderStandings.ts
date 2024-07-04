export const generateHeaderStandings = (discipline: string | undefined) => {
    const nbaHeader = ["W", "L", "WP", "PF", "GB", "OOP"]
    const nhlHeader = ["W", "L", "GP", "OTL", "PTS", "PP%", "GF", "GA", "ROW"]


    switch (discipline) {
        case 'nba': return nbaHeader;
        case 'nhl': return nhlHeader;
    }
}