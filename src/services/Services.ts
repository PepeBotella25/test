import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import fetch, {Headers, Request, Response} from "node-fetch";

if(!globalThis.fetch) {
    // @ts-ignore
    globalThis.fetch = fetch;
    // @ts-ignore
    globalThis.Headers = Headers;
    // @ts-ignore
    globalThis.Request = Request;
    // @ts-ignore
    globalThis.Response = Response;
}

const baseUrl = "http://localhost:3000/api/";

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: "api",
    endpoints: () => ({})
});

export default api;
