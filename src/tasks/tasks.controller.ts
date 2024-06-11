import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common/';
import { TasksService } from './tasks.services';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';

// Decorador que marca esta clase como un controlador y define la ruta base
@Controller('tasks')
export class TasksController {
  //inyectar el servicio de tareas
  constructor(private readonly tasksService: TasksService) {}

  //ruta para crear una nueva tarea
  @Post()
  //Usar pipes para la validacion del controlador
  @UsePipes(new ValidationPipe())
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    return this.tasksService.create(task);
  }
  //ruta para obtener todas la tareas
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }
  //ruta para obtener una tarea especifica a traves de su ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }
  //ruta para actualizar una tarea existente a traves de su ID
  @Patch(':id')
  //Usar pipes para la validacion del controlador
  @UsePipes(new ValidationPipe())
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    const task = new Task();
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    return this.tasksService.update(+id, task);
  }
  //ruta para borrar una tarea por su ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(+id);
  }
}
