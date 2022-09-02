import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Row from "../ui/Row";
import Column from "../ui/Column";
import ShippingImg from "../../imgs/ic_shipping.png";
import "./ItemCard.scss";
import {getCurrencyFormatter} from "../../utils/Utils";

interface Props {
    item: Item & { city_name: string };
}

export default function ItemCard(props: Props) {
    const { item } = props;
    const { id, title, picture, price, free_shipping, city_name } = item;
    const { currency, amount, decimals } = price;

    const format = getCurrencyFormatter(currency);

    return (
        <Link to={`/items/${id}`}>
            <Row className={"itemCard"}>
                <img className={"itemCardImg"} src={picture} alt={`${title} image`} width={"180px"} height={"180px"}/>
                <Column className={"itemCardDetails"}>
                    <Row className={"itemCardPrice"}>
                        <strong>{format(+[amount, decimals].join("."))}</strong>
                        { free_shipping ? <img src={ShippingImg} alt={"free shipping"} width={"18px"} height={"18px"} /> : <Fragment/>}
                    </Row>
                    <div className={"title"}>{title}</div>
                </Column>
                <div className={"city"}>{city_name}</div>
            </Row>
        </Link>
    );
}
