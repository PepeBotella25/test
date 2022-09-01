import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "/api/";

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: "api",
    endpoints: () => ({})
});

export default api;
