import {combineReducers, legacy_createStore} from "redux";
import {disciplineReducer} from "./leagues-reducer";
import {standingsReducer} from "./standings-reducer";

const rootReducer = combineReducers({
    disciplines: disciplineReducer,
    standings: standingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;