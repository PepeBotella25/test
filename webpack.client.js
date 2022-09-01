const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distPath = path.resolve(__dirname, "./dist");

module.exports = {
    entry: { client: "./src/index.tsx" },
    output: {
        path: distPath,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    {loader: MiniCssExtractPlugin.loader, options: {esModule: false}},
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.png$/,
                type: "asset/resource",
                generator: { outputPath: "imgs", publicPath: "/static/imgs/" }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts"]
    }
}
