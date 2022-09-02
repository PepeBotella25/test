import React, {useRef} from 'react';
import LogoImg from "../../imgs/Logo_ML.png";
import SearchImg from "../../imgs/ic_Search.png";
import {Link, useNavigate} from "react-router-dom";
import "./SearchBar.scss";
import Container from "../ui/Container";
import Row from "../ui/Row";

export default function SearchBar() {
    const navigate = useNavigate();
    const input = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if(input.current) {
            const { value } = input.current;
            navigate(`/items?search=${value}`);
        }
    }

    return (
        <Row className={"bar"}>
            <Container className={"search"}>
                <Link to={"/"}><img src={LogoImg} alt={"logo"}/></Link>
                <input ref={input} type={"text"} placeholder={"Nunca dejes de buscar"}/>
                <button onClick={onClick}><img src={SearchImg} alt={"Search bar"}/></button>
            </Container>
        </Row>
    );
}
