import {combineReducers, configureStore} from "@reduxjs/toolkit";
import baseApi from "../services/Services";

const reducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
});

const store = configureStore({reducer});
export default store;
