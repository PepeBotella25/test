import {doRequest} from "./Client";

const ITEMS_LIMIT = 4;
const author: Author = {
    name: "Daniel",
    lastname: "Peláez"
};

export async function getItems(query: string): Promise<ItemsResponse> {
    const apiURL = `sites/MLA/search?q=${query}&limit=${ITEMS_LIMIT}`;
    const { results, filters } = await doRequest(apiURL) as ItemsAPIResponse;

    const categories = filters
        .find(({ id }) => id === "category")?.values
        .map(({ name }) => name) || [];

    const items = results.map(({address, ...result}) => {
        const item = parseItem(result);
        return {...item, city_name: address.city_name};
    });

    return { items, author, categories };
}

export async function getItem(id: string): Promise<ItemResponse> {
    const apiURL = `items/${id}`;
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
    const { id, title, condition, thumbnail, currency_id, price, shipping, category_id } = item;
    const [amount, decimals] = `${price}`.split(".");

    return {
        id,
        title,
        condition,
        category_id,
        picture: thumbnail,
        free_shipping: shipping.free_shipping,
        price: {
            currency: currency_id,
            amount: +amount,
            decimals: +decimals
        }
    };
}
