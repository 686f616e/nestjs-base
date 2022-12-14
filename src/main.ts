import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { LoggerService } from '@shared/services/logger.service';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({}), {
    logger: WinstonModule.createLogger({
      instance: new LoggerService().winstonInstance(),
    }),
  });

  // App settings
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    type: VersioningType.URI,
  });

  // CORS
  app.enableCors({
    origin: '*',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Language',
      'Content-Disposition',
      'Timezone',
    ],
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    exposedHeaders: ['Content-Disposition'],
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3000);
}
bootstrap();
