import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

// Decorador que marca esta clase como un proveedor de NestJS
@Injectable()
export class TasksService {
  // Inyectar el repositorio de tareas
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}
  //metodo para crear una nueva tarea
  create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }
  //metodo para obtener todas las tareas
  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }
  //metodo para obtener una tarea especifica por su ID
  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }
  //metodo para actualizar una tarea existente por su ID
  async update(id: number, task: Task): Promise<Task> {
    await this.tasksRepository.update(id, task);
    return this.findOne(id);
  }
  //metodo para eliminar una tarea por su ID
  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
