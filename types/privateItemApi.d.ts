interface ItemsAPIResponse {
    results: Omit<ItemAPIResponse, "sold_quantity">[];
    available_filters: {
        id: string;
        values: { name: string }[]
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
}

interface ItemDescriptionAPIResponse {
    plain_text: string;
}
