// create-task.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

//clase para validar los datos de entrada al crear una tarea
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
