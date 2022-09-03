import React from "react";
import ItemCard from "./ItemCard";
import "./ItemsList.scss";

interface Props {
    items: (Item & { city_name: string })[];
}

export default function ItemsList(props: Props) {
    const { items } = props;

    return (
        <div className={"itemsList"}>
            {items.map(item => (
                <ItemCard item={item} key={item.id} />
            ))}
        </div>
    );
}
