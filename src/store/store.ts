import {combineReducers, legacy_createStore} from "redux";
import {disciplineReducer} from "./leagues-reducer";

const rootReducer = combineReducers({
    disciplines: disciplineReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;