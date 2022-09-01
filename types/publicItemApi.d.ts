interface Author {
    name: string;
    lastname: string;
}

interface ItemsResponse {
    author: Author;
    categories: string[];
    items: Item[];
}

interface ItemResponse {
    author: Author;
    item: Item & {description: string; sold_quantity: number;};
}

interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}
