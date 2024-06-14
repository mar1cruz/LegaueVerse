import {combineReducers, legacy_createStore} from "redux";
import {disciplineReducer} from "./leagues-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    disciplines: disciplineReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;

// @ts-ignore
window.store = store;