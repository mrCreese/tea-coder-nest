import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const config = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGINS').split(','), //*
    crededentials: true, // se viene mandate robe del tipo cookie
    methods: ['GET', 'POST'], // qualli metodi si puo utilizare
    exposedHeaders: ['Set-Cookies'], //header da visual in browser
    allowedHeaders: '*', //qualli headers si puo inviare dal client
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
