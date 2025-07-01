import path from "path";
import webpack from "webpack";
import { BuildEnv, BuildPaths } from "./config/webpack/types";
import { buildWebpackConfig } from "./config/webpack/build-webpack-config";

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || "development";

  const isDev = mode === "development";
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    dist: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    port,
    isDev,
    paths,
  });

  return config;
};
