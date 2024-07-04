import {createAppAsyncThunk} from "../utils/createAppAsyncThunk";
import {createSlice} from "@reduxjs/toolkit";
import {BoxScoreApi, LeagueResponse, Leagues, MatchesAPIType, StandingsType, StatsType, TeamType} from "./types";
import {leaguesApi} from "../api/api";
import {boxScoreApi, daysAPI, getDisciplinesApi, scoreApi, standingsAPI, statsApi, teamsAPI} from "../api/variebles";
import nhl from "../assets/Main/nhl-header.jpg";
import nba from "../assets/Main/basketball-header.jpg";

// interface InititialState {
//     status: 'pending' | 'success';
//     error?: string | null;
//     data?: Leagues
// }

const slice = createSlice({
    name: "league",
    initialState: {
        name: 'NHL',
        image: nhl,
        logo: '',
        standings: {},
        matchesDates: [],
        matchesOfDay: [],
        teams: [],
        boxScore: {} as BoxScoreApi,
        stats: {},
        id: -1
    } as Leagues,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLeague.fulfilled, (state, action) => {
                const image = action.payload.name === "NHL" ? nhl : nba;
                return {...state, image, ...action.payload}
            })
            .addCase(getScore.fulfilled, (state, action) => {
                state.matchesOfDay = action.payload.score;
            })
            .addCase(getStandings.fulfilled, (state, action) => {
                state.standings = action.payload.standings;
            })
            .addCase(getTeams.fulfilled, (state, action) => {
                state.teams = action.payload.teams;
            })
            .addCase(getMatchesDates.fulfilled, (state, action) => {
                state.matchesDates = action.payload.matches
            })
            .addCase(getBoxScore.fulfilled, (state, action) => {
                state.boxScore = action.payload.boxScore
            })
            .addCase(getStats.fulfilled, (state, action) => {
                state.stats = action.payload.stats
            })
    },
});

export const getLeague = createAppAsyncThunk<LeagueResponse, { leagueName: string }>(`${slice.name}/getLeague`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getLeague(arg.leagueName)

        const league = getDisciplinesApi.find((d) => d.name.toLowerCase() === arg.leagueName);

        if (!league) return rejectWithValue(null);

        return response.data;

    } catch (error) {
        return rejectWithValue(null);
    }
});

export const getScore = createAppAsyncThunk<{ score: MatchesAPIType[] }, { leagueName: string,date:string}>(`${slice.name}/getScore`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getScore(arg.leagueName, arg.date);

        return {score: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
});

export const getStandings = createAppAsyncThunk<{ standings: StandingsType }, { leagueName: string }>(`${slice.name}/getStandings`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getStandings(arg.leagueName);

        return {standings: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getTeams = createAppAsyncThunk<{ teams: TeamType[] }, { leagueName: string }>(`${slice.name}/getTeams`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getTeams(arg.leagueName);

        return {teams: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getMatchesDates = createAppAsyncThunk<{ matches: string[] }, { leagueName: string }>(`${slice.name}/getMatchesDates`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getMatches(arg.leagueName);

        return {matches: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getBoxScore = createAppAsyncThunk<{ boxScore: BoxScoreApi }, { leagueName: string, slug: string }>(`${slice.name}/getBoxScore`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getBoxScore(arg.leagueName, arg.slug);

        return {boxScore: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getStats = createAppAsyncThunk<{ stats: StatsType }, { leagueName: string}>(`${slice.name}/getStats`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getStats(arg.leagueName);

        return {stats: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})



export const leagueReducer = slice.reducer;
export const leagueThunks = {getLeague, getScore, getStandings, getTeams, getMatchesDates, getBoxScore,getStats};
