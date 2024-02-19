export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      /** 服务启动端口 */
      PORT: string;
      JWT_SECRET: string;
    }
  }
}
