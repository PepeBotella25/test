import React from 'react';
import {useSearchParams} from "react-router-dom";

export default function PLP() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");

    return <div>{"PLP " + search}</div>
}
