import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../../services/Items";
import ItemDetails from "./ItemDetails";
import BreadCrumb from "../PLP/BreadCrumb";

export default function Page() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetItemQuery({ id: id! });

    if(isLoading) {
        return <Fragment/>;
    }

    const { item } = data!;

    return (
        <Fragment>
            <BreadCrumb categoryId={item.category_id}/>
            <ItemDetails item={item} />
        </Fragment>
    );
}
