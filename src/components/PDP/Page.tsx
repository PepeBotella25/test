import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../../services/Items";
import ItemDetails from "./ItemDetails";

export default function Page() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetItemQuery({ id: id! });

    if(isLoading) {
        return <Fragment/>;
    }

    const { item } = data!;

    return (
        <ItemDetails item={item} />
    );
}
