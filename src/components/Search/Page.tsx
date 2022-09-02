import React, {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import SearchBar from "./SearchBar";
import Container from "../ui/Container";

export default function Page() {
    return (
        <Fragment>
            <header>
                <SearchBar/>
            </header>
            <Container>
                <Outlet/>
            </Container>
        </Fragment>
    );
}
