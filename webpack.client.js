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
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}
