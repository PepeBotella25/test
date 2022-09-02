import baseApi from "../services/Services";

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
export default items;
