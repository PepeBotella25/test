import React from "react";
import ReactDOM from "react-dom/server";
import serialize from "serialize-javascript";
import express from "express";
import path from "path";
import framePage from "./framePage.html";
import {getItem, getItems} from "./api/ItemsApiClient";
import {getCategory} from "./api/CategoriesApiClient";
import {routes, ServerRouter} from "../components/AppRoutes";
import App from "../components/App";
import {createStore} from "../store/Store";
import {FilledContext, HelmetProvider, HelmetServerState} from "react-helmet-async";

const PORT = 3000;
const app = express();
const router = express.Router();
const rootPath = path.join(__dirname, "..");

const SSR_CONTENT_PLACEHOLDER = "<!-- SSR_CONTENT -->";
const APP_STATE_PLACEHOLDER = "// _APP_STATE_";
const HELMET_PLACEHOLDER = "<!-- HELMET -->";

// Pages (SSR)
routes.forEach(({ path, getServerData }) => {
    router.get(path, async (req, res) => {
        const store = createStore();
        const helmetContext: FilledContext | {} = {};

        try {
            await getServerData?.(req, store);
        } catch(error) {
            console.error(error);
        }

        const content = ReactDOM.renderToString(
            <ServerRouter location={req.url}>
                <HelmetProvider context={helmetContext}>
                    <App store={store} />
                </HelmetProvider>
            </ServerRouter>
        );

        const { helmet } = helmetContext as FilledContext;
        const head = (["title", "priority", "meta", "link", "script"] as (keyof HelmetServerState)[])
            .map(key => helmet[key].toString())
            .join("");

        res.send(
            framePage
                .replace(SSR_CONTENT_PLACEHOLDER, content)
                .replace(APP_STATE_PLACEHOLDER, `window.__APP_STORE__ = ${serialize(store.getState())}`)
                .replace(HELMET_PLACEHOLDER, head)
        );
    });
});

// Api
router.get("/api/items", async (req, res) => {
    const { q } = req.query;
    const response = await getItems(q as string);
    res.send(response);
});
router.get("/api/items/:id", async (req, res) => {
    const { id } = req.params;
    const response = await getItem(id);
    res.send(response);
});
router.get("/api/categories/:id", async (req, res) => {
    const { id } = req.params;
    const response = await getCategory(id);
    res.send(response);
});

// Assets
const dist = path.join(rootPath, "dist");
router.use("/static/client.js", express.static(path.join(dist, "client.js")));
router.use("/static/client.css", express.static(path.join(dist, "client.css")));
router.use("/static/imgs", express.static(path.join(dist, "imgs")));

app.use(router);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
