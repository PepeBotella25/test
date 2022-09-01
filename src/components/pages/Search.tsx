import React from 'react';
import Logo from "../../imgs/Logo_ML.png";
import {Link, Outlet} from "react-router-dom";

export default function Search() {
    return (
        <div>
            <Link to={"/"}><img src={Logo} alt={"logo"}/></Link>
            <Link to={"/items?search=hola"}>{"PLP"}</Link>
            <Link to={"/items/MLA853486265"}>{"PDP"}</Link>
            <Outlet/>
        </div>
    );
}
