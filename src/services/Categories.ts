import baseApi from "../services/Services";

const CATEGORIES_URL = "/categories";

const categories = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query<Category["path_from_root"], { id: string }>({
            query: ({ id }) => `${CATEGORIES_URL}/${id}`
        }),
    })
});

export const { useGetCategoryQuery } = categories;
export default categories;
