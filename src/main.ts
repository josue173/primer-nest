import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Esto crea la aplicación de Nest
  await app.listen(3000); // Puerto en el que se levanta la aplicación
}
bootstrap();
