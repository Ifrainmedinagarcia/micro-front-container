const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;
const path = require("path");

const rulesForJs = {
  test: /\.js$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const rulesForFiles = {
  test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

const rulesForCss = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rules = [rulesForJs, rulesForCss, rulesForFiles];

module.exports = (env, arg) => {
  const { mode } = arg;
  const isProduction = mode === "production";
  return {
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "public/index.html" }),
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          BREAKINGBAD: "BREAKINGBAD@http://localhost:3001/remoteEntry.js",
          EPISODES: "EPISODES@http://localhost:3002/remoteEntry.js",
        },
        filename: "remoteEntry.js",
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: dependencies["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            version: dependencies["react-router-dom"],
          },
          "@material-ui/styles": {
            singleton: true,
          },
        },
      }),
    ],
    module: { rules },
    devServer: {
      open: true,
      port: 3000,
      compress: true,
      historyApiFallback: true,
    },
  };
};
