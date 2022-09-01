const path = require("path");
const nodeExternals = require('webpack-node-externals');

const distPath = path.resolve(__dirname, "./dist");

module.exports = {
    entry: { server: "./src/server/index.tsx" },
    output: {
        path: distPath,
        filename: "[name].js"
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: { sources: false }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    }
}
