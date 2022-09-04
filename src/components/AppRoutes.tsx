import React from 'react';
import Search from "./Search/Page";
import PLP, { getServerData as getPLPServerData } from "./PLP/Page";
import PDP, { getServerData as getPDPServerData } from "./PDP/Page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StaticRouter} from "react-router-dom/server";
import {Store} from "../store/Store";
import {Request} from "express";

export type IncomingRequest = Request;

interface RouteType {
    path: string;
    page?: JSX.Element;
    getServerData?: (req: IncomingRequest, store: Store) => Promise<void>
}

export const routes: RouteType[] = [
    {
        path: "/"
    },
    {
        path: "/items/:id",
        page: <PDP/>,
        getServerData: getPDPServerData
    },
    {
        path: "/items",
        page: <PLP/>,
        getServerData: getPLPServerData
    }
];

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<Search/>}>
                {routes.filter(r => !!r.page).map(({ path, page }, index) => (
                    <Route path={path} element={page} key={index}/>
                ))}
            </Route>
        </Routes>
    );
}

export const ClientRouter = BrowserRouter;
export const ServerRouter = StaticRouter;
