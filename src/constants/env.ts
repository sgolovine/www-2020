export const NODE_ENVS = {
  dev: "development",
  prod: "production",
};

export const isDev = process.env.NODE_ENV === NODE_ENVS.dev;
