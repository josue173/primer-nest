import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Esto crea la aplicación de Nest
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja "entrar" la información especificada en los DTOs
      forbidNonWhitelisted: true, // Da un error cuando "entra" información no especificada en los DTOs
    }),
  );
  await app.listen(3000); // Puerto en el que se levanta la aplicación
}
bootstrap();
