import React, {Fragment} from 'react';
import {useSearchParams} from "react-router-dom";
import {useGetItemsQuery} from "../../services/Items";
import BreadCrumb from "./BreadCrumb";
import ItemsList from "./ItemsList";
import Head from "../Head";

export default function Page() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const { data, isLoading } = useGetItemsQuery({ search });
    const { items } = data || { items: [] };

    if(isLoading || !items.length) {
        return <Fragment/>;
    }

    const categoryId = getPopularCategory(items.map(({ category_id }) => category_id));

    return (
        <Fragment>
            <Head>
                <title>{`Buscar ${search}`}</title>
            </Head>
            <BreadCrumb categoryId={categoryId}/>
            <ItemsList items={items} />
        </Fragment>
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
