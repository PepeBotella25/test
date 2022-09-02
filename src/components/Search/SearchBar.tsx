import React, {useRef} from 'react';
import LogoImg from "../../imgs/Logo_ML.png";
import SearchImg from "../../imgs/ic_Search.png";
import {Link, useNavigate} from "react-router-dom";
import "./SearchBar.scss";

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
        <div className={"bar"}>
            <div className={"search"}>
                <Link to={"/"}><img src={LogoImg} alt={"logo"}/></Link>
                <input ref={input} type={"text"} placeholder={"Nunca dejes de buscar"}/>
                <button onClick={onClick}><img src={SearchImg} alt={"Search bar"}/></button>
            </div>
        </div>
    );
}
