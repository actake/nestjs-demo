import { Module } from '@nestjs/common';

import * as Providers from './providers';

const services = Object.values(Providers);

@Module({
  providers: services,
  exports: services,
})
export class CommonModule {}
