import React from 'react';
import {useSearchParams} from "react-router-dom";
import {serverGetItems, useGetItemsQuery} from "../../services/Items";
import BreadCrumb from "./BreadCrumb";
import ItemsList from "./ItemsList";
import Head from "../Head";
import {Store} from "../../store/Store";
import {serverGetCategory} from "../../services/Categories";
import {IncomingRequest} from "../AppRoutes";

export async function getServerData(req: IncomingRequest, { dispatch }: Store) {
    const { search } = req.query;
    const { data } = await serverGetItems({ search: search as string }, dispatch);
    const categoryId = getPopularCategory(data!.items.map(({ category_id }) => category_id));
    await serverGetCategory({ id: categoryId }, dispatch);
}

export default function Page() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const { data, isLoading } = useGetItemsQuery({ search });
    const { items } = data || { items: [] };

    if(isLoading || !items.length) {
        return <></>;
    }

    const categoryId = getPopularCategory(items.map(({ category_id }) => category_id));

    return (
        <>
            <Head>
                <title>{`Buscar ${search}`}</title>
            </Head>
            <BreadCrumb categoryId={categoryId}/>
            <ItemsList items={items} />
        </>
    );
}

function getPopularCategory(categories: string[]) {
    let popular: { category: string, occurrences: number } | undefined;
    categories.forEach(category => {
        const occurrences = categories.filter(c => c === category).length;
        if(!popular || occurrences > popular.occurrences) {
            popular = { category, occurrences };
        }
    });

    return popular!.category;
}
