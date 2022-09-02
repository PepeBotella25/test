import {doRequest} from "./Client";

export async function getCategory(id: string) {
    const apiURL = `categories/${id}`;
    const { path_from_root } = await doRequest(apiURL) as Category;
    return path_from_root;
}
