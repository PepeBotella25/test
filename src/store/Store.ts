import {combineReducers, configureStore} from "@reduxjs/toolkit";
import baseApi from "../services/Services";

const reducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
});

export type State = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof createStore>;

export function createStore(preloadedState?: Partial<State>) {
    return configureStore({ preloadedState, reducer });
}


