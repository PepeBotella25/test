import React, {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import SearchBar from "./SearchBar";
import Container from "../ui/Container";
import Head from "../Head";

export default function Page() {
    return (
        <Fragment>
            <header>
                <Head>
                    <title>{"Buscar"}</title>
                </Head>
                <SearchBar/>
            </header>
            <Container>
                <Outlet/>
            </Container>
        </Fragment>
    );
}
