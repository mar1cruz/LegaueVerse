import {disciplinesReducer} from './disciplinesSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import {leagueReducer} from "./leagueSlice";
import {authReducer} from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        disciplines: disciplinesReducer,
        league: leagueReducer,
        auth: authReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type AppStoreType = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;

