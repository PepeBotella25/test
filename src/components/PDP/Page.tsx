import React from 'react';
import {useParams} from "react-router-dom";
import {serverGetItem, useGetItemQuery} from "../../services/Items";
import ItemDetails from "./ItemDetails";
import BreadCrumb from "../PLP/BreadCrumb";
import Head from "../Head";
import {serverGetCategory} from "../../services/Categories";
import {Store} from "../../store/Store";
import {IncomingRequest} from "../AppRoutes";

export async function getServerData(req: IncomingRequest, { dispatch }: Store) {
    const { id } = req.params;
    const { data } = await serverGetItem({ id }, dispatch);
    await serverGetCategory({ id: data!.item.category_id }, dispatch);
}

export default function Page() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetItemQuery({ id: id! });

    if(isLoading) {
        return <></>;
    }

    const { item } = data!;

    return (
        <>
            <Head>
                <title>{item.title}</title>
            </Head>
            <BreadCrumb categoryId={item.category_id}/>
            <ItemDetails item={item} />
        </>
    );
}
