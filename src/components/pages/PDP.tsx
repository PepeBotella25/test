import React from 'react';
import {useParams} from "react-router-dom";

export default function PDP() {
    const { id } = useParams();

    return <div>{"PDP " + id}</div>
}
