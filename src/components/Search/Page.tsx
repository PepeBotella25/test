import React, {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Page() {
    return (
        <Fragment>
            <header role={"banner"}>
                <SearchBar/>
            </header>
            <Outlet/>
        </Fragment>
    );
}
