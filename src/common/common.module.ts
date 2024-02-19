import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import * as Providers from './providers';

const services = Object.values(Providers);

@Global()
@Module({
  providers: services,
  exports: services,
})
export class CommonModule implements NestModule {
  // Global Middleware
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply();
  }
}
