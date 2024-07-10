import {createAppAsyncThunk} from "../hooks/createAppAsyncThunk";
import {createSlice} from "@reduxjs/toolkit";
import {
    InitialStore,
} from "./types";
import {leaguesApi} from "../api/league";
import {
    BoxScoreResponse,
    DisciplineResponse, ScheduleResponse,
    ScoresResponse,
    StandingsResponse,
    StatsResponse,
    TeamResponse
} from "../api/types";
import {useNavigate} from "react-router-dom";

// interface InititialState {
//     status: 'pending' | 'success';
//     error?: string | null;
//     data?: Leagues
// }

const initialState = {
    standings: {},
    schedule: [],
    matchesDates: [],
    matchesOfDay: [],
    teams: {},
    boxScore: {} as BoxScoreResponse,
    stats: {},
} as InitialStore


const slice = createSlice({
    name: "league",
    initialState,
    reducers: {
        clearStore() {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLeague.fulfilled, (state, action) => {
                return {...state, ...action.payload}
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
            .addCase(getSchedule.fulfilled, (state, action) => {
                state.schedule = action.payload.schedule
            })
    },
});

export const getLeague = createAppAsyncThunk<DisciplineResponse, {
    leagueName: string
}>(`${slice.name}/getLeague`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getLeague(arg.leagueName)

        return response.data;
    } catch (error) {
        return rejectWithValue(null);
    }
});

export const getScore = createAppAsyncThunk<{ score: ScoresResponse[] }, {
    leagueName: string,
    date: string
}>(`${slice.name}/getScore`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getScore(arg.leagueName, arg.date);

        return {score: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
});

export const getStandings = createAppAsyncThunk<{ standings: StandingsResponse }, {
    leagueName: string
}>(`${slice.name}/getStandings`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getStandings(arg.leagueName);

        return {standings: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getTeams = createAppAsyncThunk<{ teams: TeamResponse }, {
    leagueName: string
}>(`${slice.name}/getTeams`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getTeams(arg.leagueName);

        return {teams: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getMatchesDates = createAppAsyncThunk<{ matches: string[] }, {
    leagueName: string
}>(`${slice.name}/getMatchesDates`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getMatches(arg.leagueName);

        return {matches: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getBoxScore = createAppAsyncThunk<{ boxScore: BoxScoreResponse }, {
    leagueName: string,
    slug: string
}>(`${slice.name}/getBoxScore`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getBoxScore(arg.leagueName, arg.slug);

        return {boxScore: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getStats = createAppAsyncThunk<{ stats: StatsResponse }, {
    leagueName: string
}>(`${slice.name}/getStats`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getStats(arg.leagueName);

        return {stats: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const getSchedule = createAppAsyncThunk<{ schedule: ScheduleResponse[] }, {
    leagueName: string
}>(`${slice.name}/getSchedule`, async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await leaguesApi.getSchedule(arg.leagueName);

        return {schedule: response.data};
    } catch (error) {
        return rejectWithValue(null);
    }
})

export const leagueReducer = slice.reducer;
export const leagueActions = slice.actions
export const leagueThunks = {
    getLeague,
    getScore,
    getStandings,
    getTeams,
    getMatchesDates,
    getBoxScore,
    getStats,
    getSchedule
};
