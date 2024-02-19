import { Logger, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { configuration, loggerOptions } from './configs';
import { CommonModule } from './common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),
    AuthModule,
    CommonModule,
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../public`,
      renderPath: '/',
    }),
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
