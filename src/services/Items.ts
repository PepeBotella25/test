import baseApi from "../services/Services";
import {Store} from "../store/Store";

const ITEMS_URL = "/items";

const items = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query<ItemsResponse, { search: string }>({
            query: ({ search }) => `${ITEMS_URL}?q=${search}`
        }),
        getItem: builder.query<ItemResponse, { id: string }>({
            query: ({ id }) => `${ITEMS_URL}/${id}`
        }),
    })
});

export const { useGetItemsQuery, useGetItemQuery } = items;

export function serverGetItems(args: { search: string }, dispatch: Store["dispatch"]) {
    const { initiate } = items.endpoints.getItems;
    return dispatch(initiate(args));
}

export function serverGetItem(args: { id: string }, dispatch: Store["dispatch"]) {
    const { initiate } = items.endpoints.getItem;
    return dispatch(initiate(args));
}
