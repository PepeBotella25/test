import React from 'react';
import Search from "./Search/Page";
import PLP from "./PLP/Page";
import PDP from "./PDP/Page";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Search/>}>
                    <Route path={"items/:id"} element={<PDP/>} />
                    <Route path={"/items"} element={<PLP/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
