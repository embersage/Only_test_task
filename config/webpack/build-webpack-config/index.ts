import webpack from "webpack";
import "webpack-dev-server";
import { buildLoaders } from "../build-loaders";
import { buildPlugins } from "../build-plugins";
import { BuildOptions } from "../types";
import { buildDevServer } from "../build-dev-server";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, isDev, paths } = options;

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.dist,
      clean: true,
    },
    module: { rules: buildLoaders(options) },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: buildPlugins(paths),
  };
};
