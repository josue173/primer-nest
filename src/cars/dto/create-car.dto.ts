/* eslint-disable prettier/prettier */

import { IsString, MinLength } from 'class-validator';

// Es una clase y no una interfaz porque se harán validaciones de la información, eso no es posible con las intefaces
export class CreateCarDto {
  @IsString() //Decorador para la metadata
  readonly brand: string;
  @IsString()
  @MinLength(3) // Validaciones
  readonly model: string;
}
