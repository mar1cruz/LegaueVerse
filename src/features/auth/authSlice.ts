import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../hooks/createAppAsyncThunk";
import {authApi} from "../../api/auth";
import axios from "axios";

const slice = createSlice({
    name: 'authSlice',
    initialState: {
        token: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.access;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.token = ''
            })
    },
});

const login = createAppAsyncThunk<{ access: string, refresh: string }, {
    email: string,
    password: string
}>(`${slice.name}/login`, async (arg, thunkAPI) => {
    const {email, password} = arg;
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await authApi.login({email, password});
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.detail);
        }
    }
});

const register = createAppAsyncThunk<any, {
    email: string,
    password: string
}>(`${slice.name}/register`, async (arg, thunkAPI) => {
    const {email, password} = arg;
    const {rejectWithValue} = thunkAPI;

    try {
        const response = await authApi.register({email, password});
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.detail);
        }
    }
});

const logOut = createAppAsyncThunk<boolean, void>(`${slice.name}/logout`, async (arg, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(false);
        }, 500);
    });
});


export const authReducer = slice.reducer;
export const authThunks = {login, register, logOut};
