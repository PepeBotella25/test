import React from "react";
import {Link} from "react-router-dom";
import ShippingImg from "../../imgs/ic_shipping.png";
import "./ItemCard.scss";
import {getCurrencyFormatter} from "../../utils/Utils";
import Container from "../ui/Container";

interface Props {
    item: ItemsResponse["items"][0];
}

export default function ItemCard(props: Props) {
    const { item } = props;
    const { id, title, picture, price, free_shipping, city_name } = item;
    const { currency, amount, decimals } = price;

    const format = getCurrencyFormatter(currency);

    return (
        <Link to={`/items/${id}`}>
            <Container className={"itemCard"}>
                <img className={"itemCardImg"} src={picture} alt={`${title} image`} width={"180px"} height={"180px"}/>
                <div className={"itemCardDetails"}>
                    <div className={"itemCardPrice"}>
                        <strong>{format(+[amount, decimals].join("."))}</strong>
                        { free_shipping ? <img src={ShippingImg} alt={"free shipping"} width={"18px"} height={"18px"} /> : <></>}
                    </div>
                    <div className={"title"}>{title}</div>
                </div>
                <div className={"city"}>{city_name}</div>
            </Container>
        </Link>
    );
}
