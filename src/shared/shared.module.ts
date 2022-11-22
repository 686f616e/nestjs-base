import { Module, Global } from '@nestjs/common';
import { UltilityService } from './services/ultility.service';

const services = [UltilityService];

@Global()
@Module({
  providers: services,
  exports: services,
})
export class SharedModule {}
