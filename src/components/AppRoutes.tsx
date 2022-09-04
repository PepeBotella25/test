import React from 'react';
import Search from "./Search/Page";
import PLP from "./PLP/Page";
import PDP from "./PDP/Page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StaticRouter} from "react-router-dom/server";

interface RouteType {
    path: string;
    page?: JSX.Element;
}

export const routes: RouteType[] = [
    {
        path: "/"
    },
    {
        path: "/items/:id",
        page: <PDP/>
    },
    {
        path: "/items",
        page: <PLP/>
    }
];

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<Search/>}>
                {routes.filter(r => !!r.page).map(({ path, page }) => (
                    <Route path={path} element={page} />
                ))}
            </Route>
        </Routes>
    );
}

export const ClientRouter = BrowserRouter;
export const ServerRouter = StaticRouter;
