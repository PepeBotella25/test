import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useGetItemsQuery} from "../../services/Items";

export default function PLP() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const { data, isFetching } = useGetItemsQuery({ search });

    return (
        <div>
            <div>{"PLP " + search}</div>
            <div>{!isFetching ? JSON.stringify(data) : ""}</div>
        </div>
    );
}
