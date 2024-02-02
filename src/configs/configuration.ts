export interface Config {
  port: number;
}

export const configuration = async (): Promise<Config> => {
  return {
    port: parseInt(process.env.PORT) || 3000,
  };
};
