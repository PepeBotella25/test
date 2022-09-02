import React from "react";

interface Props {
    item: Item;
}

export default function ItemDetails(props: Props) {
    const { item } = props;

    return <div>{JSON.stringify(item)}</div>
}
