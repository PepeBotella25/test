import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItemQuery} from "../../services/Items";

export default function PDP() {
    const { id } = useParams<{ id: string }>();
    const { data, isFetching } = useGetItemQuery({ id: id! });

    return (
        <div>
            <div>{"PDP " + id}</div>
            <div>{!isFetching ? JSON.stringify(data) : ""}</div>
        </div>
    );
}
