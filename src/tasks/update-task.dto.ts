// update-task.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

//Clase para validar los datos de entrada al actualizar una tarea
export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status?: string;
}
