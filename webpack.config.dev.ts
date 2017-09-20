import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: [
        "react-hot-loader/patch",
        "./src/index.tsx",
    ],
    output: {
        path: path.join(__dirname, 'dist', 'client'),
        filename: "bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Cómo Ayudar MX | Información para ayudar.',
            chunksSortMode: 'dependency',
            template: path.resolve(__dirname, './src/index.ejs')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src"),
            },
            {
              test: /\.(jpg|png|svg)$/,
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    devServer: {
        hot: true,
        inline: true
    }

};

export default config;
