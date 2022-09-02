import React from "react";
import {Link} from "react-router-dom";

interface Props {
    item: Item;
}

export default function ItemCard(props: Props) {
    const { item } = props;
    const { id, title } = item;
    return (
        <div>
            <Link to={`/items/${id}`}>{title}</Link>
        </div>
    );
}
