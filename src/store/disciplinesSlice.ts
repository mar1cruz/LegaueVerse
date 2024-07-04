import nba from './../assets/Main/basketball-header.jpg'
import nhl from './../assets/Main/nhl-header.jpg'

import {createSlice} from "@reduxjs/toolkit";
import {Disciplines, DisciplineResponse} from "./types";
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk";
import {leaguesApi} from "../api/api";
import {getDisciplinesApi} from "../api/variebles";


const slice = createSlice({
    name: "disciplines",
    initialState: [] as Disciplines[],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDisciplines.fulfilled, (state, action) => {
                return action.payload.disciplines.map(d => {
                    const image = d.name === "NHL" ? nhl : nba

                    return {...d, image}
                })
            })
    }
})


export const getDisciplines = createAppAsyncThunk<{
    disciplines: DisciplineResponse[]
}, void>(`${slice.name}/getLeagues`, async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI

    try {
        const response = await leaguesApi.getDisciplines()

        // return {leagues: response.data}


        return {disciplines: response.data}

    } catch (error) {
        return rejectWithValue(null);
    }
});

export const disciplinesReducer = slice.reducer;
export const disciplinesActions = slice.actions;
export const disciplinesThunks = {getDisciplines};


