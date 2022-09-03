import React from 'react';
import {Outlet} from "react-router-dom";
import SearchBar from "./SearchBar";
import Container from "../ui/Container";
import Head from "../Head";

export default function Page() {
    return (
        <>
            <header>
                <Head>
                    <title>{"Buscar"}</title>
                </Head>
                <SearchBar/>
            </header>
            <Outlet/>
        </>
    );
}
