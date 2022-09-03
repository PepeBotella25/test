import React, {useRef} from 'react';
import LogoImg from "../../imgs/Logo_ML.png";
import SearchImg from "../../imgs/ic_Search.png";
import {Link, useNavigate} from "react-router-dom";
import "./SearchBar.scss";
import Container from "../ui/Container";
import Row from "../ui/Row";
import Grid from "../ui/Grid";

const ENTER_KEY = "Enter";

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
        <Grid className={"search"}>
            <div className={"gridLogo"} >
                <Link to={"/"}><img src={LogoImg} alt={"logo"}/></Link>
            </div>
            <div className={"gridSearch"}>
                <input onKeyDown={(e) => e.key === ENTER_KEY && onClick()} ref={input} type={"text"} placeholder={"Nunca dejes de buscar"}/>
                <button onClick={onClick}><img src={SearchImg} alt={"Search bar"}/></button>
            </div>
        </Grid>
    );
}
