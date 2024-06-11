import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Task Manager') // Título de la documentación
    .setDescription('The Task Manager API description') // Descripción de la API
    .setVersion('1.0') // Versión de la API
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Ruta para la documentación de Swagger

  await app.listen(3000); // Iniciar la aplicación en el puerto 3000
}
bootstrap();
