import express, {RequestHandler} from "express";
import path from "path";
import framePage from "./framePage.html";
import {getItem, getItems} from "./api/ItemsApiClient";
import {getCategory} from "./api/CategoriesApiClient";

const PORT = 3000;
const app = express();
const router = express.Router();
const rootPath = path.join(__dirname, "..");

const getFramePage: RequestHandler = (req, res) => {
    res.send(framePage);
};

// Pages
router.get("/", getFramePage);
router.get("/items", getFramePage);
router.get("/items/:id", getFramePage);

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
