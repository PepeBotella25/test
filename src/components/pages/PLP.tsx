import React from 'react';
import {useSearchParams} from "react-router-dom";

export default function PLP() {
    const [search] = useSearchParams();

    return <div>{"PLP " + search}</div>
}
