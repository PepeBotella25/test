import React, {Fragment} from 'react';
import {useSearchParams} from "react-router-dom";
import {useGetItemsQuery} from "../../services/Items";
import ItemCard from "./ItemCard";

export default function Page() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const { data, isLoading } = useGetItemsQuery({ search });

    if(isLoading) {
        return <Fragment/>;
    }

    const { items } = data!;

    return (
        <div>
            {items.map(item => (
                <ItemCard item={item} key={item.id} />
            ))}
        </div>
    );
}
