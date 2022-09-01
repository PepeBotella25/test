import fetch from 'node-fetch';

const baseUrl = "https://api.mercadolibre.com";
const ITEMS_LIMIT = 4;
const author: Author = {
    name: "Daniel",
    lastname: "Peláez"
};

export async function getItems(query: string): Promise<ItemsResponse> {
    const apiURL = `${baseUrl}/sites/MLA/search?q=${query}&limit=${ITEMS_LIMIT}`;
    const { results, available_filters } = await doRequest(apiURL) as ItemsAPIResponse;

    const categories = available_filters
        .find(({ id }) => id === "category")?.values
        .map(category => category.name) || [];

    const items = results.map(parseItem);

    return { items, author, categories };
}

export async function getItem(id: string): Promise<ItemResponse> {
    const apiURL = `${baseUrl}/items/${id}`;
    const [item, { plain_text }] = await Promise.all([doRequest(apiURL), doRequest(`${apiURL}/description`)]) as [ItemAPIResponse, ItemDescriptionAPIResponse];

    return {
        item: {
            ...parseItem(item),
            sold_quantity: item.sold_quantity,
            description: plain_text
        },
        author
    };
}

function parseItem(item: Omit<ItemAPIResponse, "sold_quantity">): Item {
    const { id, title, condition, thumbnail, currency_id, price, shipping } = item;
    const [amount, decimals] = `${price}`.split(".");

    return {
        id,
        title,
        condition,
        picture: thumbnail,
        free_shipping: shipping.free_shipping,
        price: {
            currency: currency_id,
            amount: +amount,
            decimals: +decimals
        }
    };
}

async function doRequest(url: string) {
    const response = await fetch(url);
    return response.json();
}
