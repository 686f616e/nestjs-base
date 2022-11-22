import { validate } from '@common/validation/env.validation';
import { DatabaseModule } from '@db/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validate,
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
