import { Params } from 'nestjs-pino';

export const loggerOptions: Params = {
  pinoHttp: {
    quietReqLogger: true,
    ...(process.env.NODE_ENV === 'production'
      ? {}
      : {
          level: 'debug',
          // https://github.com/pinojs/pino-pretty
          transport: {
            target: 'pino-pretty',
            options: { sync: true, singleLine: true },
          },
        }),
  },
};
