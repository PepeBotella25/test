import React from 'react';
import Search from "./pages/Search";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Search/>}>
                    <Route path={"items"} element={<PLP/>}/>
                    <Route path={"items/:id"} element={<PDP/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
