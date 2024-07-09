import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../hooks/createAppAsyncThunk";
import {leaguesApi} from "../api/league";
import {DisciplineResponse} from "../api/types";


const slice = createSlice({
    name: "disciplines",
    initialState: [] as DisciplineResponse[],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDisciplines.fulfilled, (state, action) => {
                const comingSoon = {name: 'coming soon', id: -1, logo: '', background: ''}
                return [...action.payload.disciplines, comingSoon]
            })
    }
})


export const getDisciplines = createAppAsyncThunk<{ disciplines: DisciplineResponse[] }, void>(`${slice.name}/getLeagues`, async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI

    try {
        const response = await leaguesApi.getDisciplines()

        return {disciplines: response.data}

    } catch (error) {
        return rejectWithValue(null);
    }
});

export const disciplinesReducer = slice.reducer;
export const disciplinesThunks = {getDisciplines};


