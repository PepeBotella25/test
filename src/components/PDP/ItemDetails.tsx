import React from "react";
import "./ItemDetails.scss";
import Row from "../ui/Row";
import {classNames, getCurrencyFormatter} from "../../utils/Utils";
import Grid from "../ui/Grid";
import Container from "../ui/Container";

interface Props {
    item: ItemResponse["item"];
}

export default function ItemDetails(props: Props) {
    const { item } = props;
    const { title, condition, picture, sold_quantity, price, description } = item;
    const { currency, amount, decimals } = price;

    const format = getCurrencyFormatter(currency);

    return (
        <Container className={"itemDetails"} >
            <div>
                <img src={picture} alt={"item image"} width={"680px"} height={"680px"}/>
            </div>
            <div className={"details"}>
                <div>
                    <span>{condition}</span>
                    <span>{" - "}</span>
                    <span>{`${sold_quantity} vendidos`}</span>
                </div>
                <div className={"title"}>{title}</div>
                <div className={"price"}>{format(+[amount, decimals].join("."))}</div>
                <button>{"Comprar"}</button>
            </div>
            <div className={"itemDescription"}>
                <div>
                    <div className={"title"}>{"Descriptción del producto"}</div>
                    <div>{description}</div>
                </div>
            </div>
        </Container>
    );
}
