import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';
//Decorador para definir el modulo principal de la aplicacion
@Module({
  imports: [
    // Configuración de TypeORM para usar SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite', // Tipo de base de datos
      database: 'tasks.db', // Nombre del archivo de la base de datos
      entities: [Task], //entidades a incluir
      synchronize: true, //Sincroniza automaticamente el esquema de la base de datos
    }),
    TasksModule, //Modulo de tareas
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
