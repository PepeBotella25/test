import baseApi from "../services/Services";
import {Store} from "../store/Store";

const CATEGORIES_URL = "/categories";

const categories = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query<Category["path_from_root"], { id: string }>({
            query: ({ id }) => `${CATEGORIES_URL}/${id}`
        }),
    })
});

export const { useGetCategoryQuery } = categories;

export function serverGetCategory(args: { id: string }, dispatch: Store["dispatch"]) {
    const { initiate } = categories.endpoints.getCategory;
    return dispatch(initiate(args));
}
