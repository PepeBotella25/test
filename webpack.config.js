const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");

const distPath = path.resolve(__dirname, "./dist");
const output = {
    path: distPath,
    filename: "[name].js"
};
const resolve = {
    extensions: [".tsx", ".ts", ".js"]
};
const javascript = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: { loader: "babel-loader" }
};

const clientConfig = {
    entry: { client: "./src/index.tsx" },
    output ,
    module: {
        rules: [
            {
                test: /\.png$/,
                type: "asset/resource",
                generator: { outputPath: "imgs", publicPath: "/static/imgs/" }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    "css-loader",
                    "sass-loader"
                ]
            },
            javascript
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve
};

const serverConfig = {
    entry: { server: "./src/server/index.tsx" },
    output,
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            javascript,
            {
                test: /\.html$/,
                loader: "html-loader",
                options: { sources: false }
            }
        ]
    },
    resolve
};

module.exports = [clientConfig, serverConfig];
