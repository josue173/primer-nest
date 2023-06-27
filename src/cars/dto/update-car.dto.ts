/* eslint-disable prettier/prettier */

import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

// Es una clase y no una interfaz porque se harán validaciones de la información, eso no es posible con las intefaces
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString() //Decorador para la metadata
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @MinLength(3) // Validaciones
  @IsOptional()
  readonly model?: string;
}
