export interface Config extends Pick<NodeJS.ProcessEnv, 'JWT_SECRET'> {
  port: number;
}

export const configuration = async (): Promise<Config> => {
  return {
    port: parseInt(process.env.PORT) || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
  };
};
