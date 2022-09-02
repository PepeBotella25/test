import React, {Fragment} from 'react';
import {useSearchParams} from "react-router-dom";
import {useGetItemsQuery} from "../../services/Items";
import BreadCrumb from "./BreadCrumb";
import ItemsList from "./ItemsList";

export default function Page() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const { data, isLoading } = useGetItemsQuery({ search });

    if(isLoading) {
        return <Fragment/>;
    }

    const { items } = data!;

    const categoryId = getPopularCategory(items.map(({ category_id }) => category_id));

    return (
        <Fragment>
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
