import nbaLogo from "../assets/Main/nba.png";
import nhlLogo from "../assets/Main/nhl.png";

import logo1 from "../assets/Score/9wPFTOxV_zP1KmRRggJNqQ_48x48.png";
import logo2 from "../assets/Score/21Zm6e_zGiWXsaLCQyjVig_48x48.png";
import logo3 from "../assets/Score/4ndR-n-gall7_h3f7NYcpQ_48x48.png";
import logo4 from "../assets/Score/b4bJ9zKFBDykdSIGUrbWdw_48x48.png";
import logo5 from "../assets/Score/andumiE_wrpDpXvUgqCGYQ_48x48.png";
import logo6 from "../assets/Score/745IgW4NSvnRxg-W9oczmQ_48x48.png";

export const getDisciplinesApi = [
    {
        id: 1,
        name: "NBA",
        logo: nbaLogo
    },
    {
        id: 2,
        name: "NHL",
        logo: nhlLogo
    }
]

export const scoreApi = [
    {
        id: 1,
        date: "2024-06-17",
        visitor_team: {
            id: 26,
            name: "Dallas Mavericks",
            conference: "Western",
            division: "Southwest",
            team_logo: logo1
        },
        visitor_pts: 88,
        home_team: {
            id: 2,
            name: "Boston Celtics",
            conference: "Eastern",
            division: "Atlantic",
            team_logo: logo2
        },
        home_pts: 106,
        slug: "20240617BOS"
    },
    {
        id: 2,
        date: "2024-06-14",
        visitor_team: {
            id: 2,
            name: "Boston Celtics",
            conference: "Eastern",
            division: "Atlantic",
            team_logo: logo3
        },
        visitor_pts: 84,
        home_team: {
            id: 26,
            name: "Dallas Mavericks",
            conference: "Western",
            division: "Southwest",
            team_logo: logo4
        },
        home_pts: 122,
        slug: "20240614BOC"
    },
    {
        id: 3,
        date: "2024-06-12",
        visitor_team: {
            id: 2,
            name: "Boston Celtics",
            conference: "Eastern",
            division: "Atlantic",
            team_logo: logo5
        },
        visitor_pts: 106,
        home_team: {
            id: 26,
            name: "Dallas Mavericks",
            conference: "Western",
            division: "Southwest",
            team_logo: logo6
        },
        home_pts: 99,
        slug: "20240612BOM"
    },
]

export const standingsAPI = {
    "Eastern": [
        {
            "team": {
                "id": 2,
                "name": "Boston Celtics",
                "conference": "Eastern",
                "division": "Atlantic",
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/GDJBo7eEF8EO5-kDHVpdqw_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/NAlGkmv45l1L-3NhwVhDPg_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/Wd6xIEIXpfqg9EZC6PAepQ_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/-rf7eY39l_0V7J4ekakuKA_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/US6KILZue2D5766trEf0Mg_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/p69oiJ4LDsvCJUDQ3wR9PQ_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/andumiE_wrpDpXvUgqCGYQ_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/0nQXN6OF7wnLY3hJz8lZJQ_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/ofjScRGiytT__Flak2j4dg_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/pm5l5mtY1elOQAl9ZEcm2A_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/iishUmO7vbJBE7iK2CZCdw_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/745IgW4NSvnRxg-W9oczmQ_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/ToeKy5-TrHAnTCl-qhuuHQ_48x48.png",
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/NBkMJapxft4V5kvufec4Jg_48x48.png",
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/qvWE2FgBX0MCqFfciFBDiw_48x48.png",
            },
            "wins": 14,
            "losses": 68,
            "winning_percentage": 0.171,
            "points_percentage_game": 109.9,
            "games_back": "50.0",
            "oop_points_percentage_game": 119.0
        }],
    "Western": [
        {
            "team": {
                "id": 16,
                "name": "Oklahoma City Thunder",
                "conference": "Western",
                "division": "Northwest",
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/21Zm6e_zGiWXsaLCQyjVig_48x48.png"
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/b4bJ9zKFBDykdSIGUrbWdw_48x48.png",
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/F36nQLCQ2FND3za-Eteeqg_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/9wPFTOxV_zP1KmRRggJNqQ_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/JCQO978-AWbg00TQUNPUVg_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/pRr87i24KHWH0UuAc5EamQ_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/wkCDHakxEThLGoZ4Ven48Q_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/xxxlj9RpmAKJ9P9phstWCQ_48x48.png"
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/4ndR-n-gall7_h3f7NYcpQ_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/ovwlyYHRKZ90s7zn_qlMCg_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/xxdtYBIrtmG-BKEdbxpTBw_48x48.png"
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/zhO6MIB1UzZmtXLHkJQBmg_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/3ho45P8yNw-WmQ2m4A4TIA_48x48.png",
            },
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
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/_bgagBCd6ieOIt3INWRN_w_48x48.png",
            },
            "wins": 20,
            "losses": 62,
            "winning_percentage": 0.244,
            "points_percentage_game": 110.0,
            "games_back": "37.0",
            "oop_points_percentage_game": 116.3
        },
        {
            "team": {
                "id": 20,
                "name": "Portland Trail Blazers",
                "conference": "Western",
                "division": "Northwest",
                "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/FKwMB_85FlZ_7PTt1f7hjQ_48x48.png",
            },
            "wins": 21,
            "losses": 61,
            "winning_percentage": 0.256,
            "points_percentage_game": 106.4,
            "games_back": "36.0",
            "oop_points_percentage_game": 115.4
        }]
}

export const teamsAPI = [
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

export const daysAPI = [
    "2024-06-17",
    "2024-06-14",
    "2024-06-12",
]

export const boxScoreApi = {
    date: "2024-06-17",
    visitor_team: {
        id: 26,
        name: "Dallas Mavericks",
        conference: "Western",
        division: "Southwest",
        team_logo: "http://127.0.0.1:8000/media/logos/nba/dallas-mavericks-logo.png"
    },
    visitor_pts: 88,
    home_team: {
        id: 2,
        name: "Boston Celtics",
        conference: "Eastern",
        division: "Atlantic",
        team_logo: "http://127.0.0.1:8000/media/logos/nba/boston-celtics-logo.png"
    },
    home_pts: 106,
    time: "8:30p",
    status: "Finished",
    arena: "TD Garden",
    type: "Playoff",
    box_score: {
        id: 1,
        home_team_stats: {
            id: 2,
            field_goals: 38,
            field_goal_attempts: 89,
            field_goals_percentage: 0.427,
            three_point_field_goals: 13,
            three_point_field_goal_attempts: 39,
            three_point_field_goals_percentage: 0.333,
            free_throws: 17,
            free_throw_attempts: 20,
            free_throw_percentage: 0.85,
            personal_fouls: 15,
            total_rebounds: 51,
            offensive_rebounds: 15,
            turnovers: 7,
            assists: 25,
            steals: 9,
            blocks: 2
        },
        visitor_team_stats: {
            id: 1,
            field_goals: 35,
            field_goal_attempts: 78,
            field_goals_percentage: 0.449,
            three_point_field_goals: 11,
            three_point_field_goal_attempts: 37,
            three_point_field_goals_percentage: 0.297,
            free_throws: 7,
            free_throw_attempts: 13,
            free_throw_percentage: 0.538,
            personal_fouls: 20,
            total_rebounds: 35,
            offensive_rebounds: 7,
            turnovers: 13,
            assists: 18,
            steals: 4,
            blocks: 4
        }
    }
}

export const statsApi = {
    'Points Per Game': [
        {
            team: "Indiana Pacers",
            value: 123.1
        },
        {
            team: "Boston Celtics",
            value: 120.6
        },
        {
            team: "Oklahoma City Thunder",
            value: 120.1
        },
        {
            team: "Milwaukee Bucks",
            value: 118.9
        },
        {
            team: "Atlanta Hawks",
            value: 118.3
        }
    ],
    'Assists Per Game': [
        {
            team: "Indiana Pacers",
            value: 30.7
        },
        {
            team: "San Antonio Spurs",
            value: 29.9
        },
        {
            team: "Denver Nuggets",
            value: 29.5
        },
        {
            team: "Golden State Warriors",
            value: 29.3
        },
        {
            team: "Toronto Raptors",
            value: 28.5

        }
    ],
    'Rebounds Per Game': [
        {
            team: "Golden State Warriors",
            value: 46.7
        },
        {
            team: "Boston Celtics",
            value: 46.3
        },
        {
            team: "Utah Jazz",
            value: 45.5
        },
        {
            team: "Houston Rockets",
            value: 45.5
        },
        {
            team: "New York Knicks",
            value: 45.2
        }
    ],
    'Blocks Per Game': [
        {
            team: "Boston Celtics",
            value: 6.6
        },
        {
            team: "Oklahoma City Thunder",
            value: 6.6
        },
        {
            team: "San Antonio Spurs",
            value: 6.3
        },
        {
            team: "Minnesota Timberwolves",
            value: 6.1
        },
        {
            team: "Memphis Grizzlies",
            value: 6.1
        }

    ],
    'Steals Per Game': [
        {
            team: "Philadelphia 76ers",
            value: 8.5
        },
        {
            team: "Oklahoma City Thunder",
            value: 8.5
        },
        {
            team: "New Orleans Pelicans",
            value: 8.4
        },
        {
            team: "Orlando Magic",
            value: 8.2
        },
        {
            team: "Memphis Grizzlies",
            value: 8.2
        }
    ],
    'Field Goal Percentage': [
        {
            team: "Indiana Pacers",
            value: 50.7
        },
        {
            team: "Oklahoma City Thunder",
            value: 50
        },
        {
            team: "Los Angeles Lakers",
            value: 50
        },
        {
            team: "Denver Nuggets",
            value: 49.7
        },
        {
            team: "Phoenix Suns",
            value: 49.5
        }

    ],
    'Three Pointers Made': [
        {
            team: "Boston Celtics",
            value: 1351
        },
        {
            team: "Golden State Warriors",
            value: 1211
        }
        ,
        {
            team: "Dallas Mavericks",
            value: 1197
        }
        ,
        {
            team: "Sacramento Kings",
            value: 1178
        }
        ,
        {
            team: "Milwaukee Bucks",
            value: 1163
        }
    ],
    'Three Point Percentage': [
        {
            team: "Boston Celtics",
            value: 38.8
        },
        {
            team: "Oklahoma City Thunder",
            value: 38.7
        }
        ,
        {
            team: "Minnesota Timberwolves",
            value: 38.7
        }
        ,
        {
            team: "Los Angeles Clippers",
            value: 38.2
        }
        ,
        {
            team: "Phoenix Suns",
            value: 38
        }

    ],
    'Free Throw Percentage': [
        {
            team: "Utah Jazz",
            value: 83.1
        },
        {
            team: "Oklahoma City Thunder",
            value: 83
        },
        {
            team: "Los Angeles Clippers",
            value: 83
        },
        {
            team: "Philadelphia 76ers",
            value: 82.3
        },
        {
            team: "Miami Heat",
            value: 81.7
        }
    ]
}

export const scheduleApi = [
    {
        "id": 5,
        "date": "2024-07-02",
        "visitor_team": {
            "id": 26,
            "name": "Dallas Mavericks",
            "conference": "Western",
            "division": "Southwest",
            "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/JCQO978-AWbg00TQUNPUVg_48x48.png"
        },
        "visitor_pts": 89,
        "home_team": {
            "id": 2,
            "name": "Boston Celtics",
            "conference": "Eastern",
            "division": "Atlantic",
            "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/GDJBo7eEF8EO5-kDHVpdqw_48x48.png"
        },
        "home_pts": 107,
        "slug": "20240606-DAL",
        "time": "8:30p",
        "arena": "TD Garden",
        "type": "Playoff"
    },
    {
        "id": 3,
        "date": "2024-07-09",
        "visitor_team": {
            "id": 2,
            "name": "Boston Celtics",
            "conference": "Eastern",
            "division": "Atlantic",
            "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/GDJBo7eEF8EO5-kDHVpdqw_48x48.png"
        },
        "visitor_pts": 106,
        "home_team": {
            "id": 26,
            "name": "Dallas Mavericks",
            "conference": "Western",
            "division": "Southwest",
            "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/JCQO978-AWbg00TQUNPUVg_48x48.png"
        },
        "home_pts": 99,
        "slug": "20240612-BOS",
        "time": "8:30p",
        "arena": "American Airlines Center",
        "type": "Playoff"
    },
    {
        "id": 4,
        "date": "2024-07-09",
        "visitor_team": {
            "id": 26,
            "name": "Dallas Mavericks",
            "conference": "Western",
            "division": "Southwest",
            "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/JCQO978-AWbg00TQUNPUVg_48x48.png"
        },
        "visitor_pts": 98,
        "home_team": {
            "id": 2,
            "name": "Boston Celtics",
            "conference": "Eastern",
            "division": "Atlantic",
            "team_logo": "https://ssl.gstatic.com/onebox/media/sports/logos/GDJBo7eEF8EO5-kDHVpdqw_48x48.png"
        },
        "home_pts": 105,
        "slug": "20240609-DAL",
        "time": "8:00p",
        "arena": "TD Garden",
        "type": "Playoff"
    }
]



