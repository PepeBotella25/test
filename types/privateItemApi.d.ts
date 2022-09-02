interface Category {
    id: string;
    name: string;
    path_from_root: { id: string; name: string }[]
}

interface ItemsAPIResponse {
    results: (Omit<ItemAPIResponse, "sold_quantity"> & { address: { city_name: string } })[];
    filters: {
        id: string;
        values: Category[]
    }[]
}

interface ItemAPIResponse {
    id: string;
    title: string;
    condition: string;
    shipping: { free_shipping: boolean };
    thumbnail: string;
    price: number;
    currency_id: string;
    sold_quantity: number;
    category_id: string;
}

interface ItemDescriptionAPIResponse {
    plain_text: string;
}
