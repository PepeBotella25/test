import fetch from "node-fetch";

const baseUrl = "https://api.mercadolibre.com";

export async function doRequest(url: string) {
    const response = await fetch(`${baseUrl}/${url}`);
    return response.json();
}
