export type BuildEnv = {
  mode?: "development" | "production";
  port?: number;
};

export type BuildPaths = {
  entry: string;
  dist: string;
  html: string;
};

export type BuildOptions = {
  mode: "development" | "production";
  port: number;
  isDev: boolean;
  paths: BuildPaths;
};
