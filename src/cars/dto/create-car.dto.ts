/* eslint-disable prettier/prettier */
// Es una clase y no una interfaz porque se harán validaciones de la información, eso no es posible con las intefaces
export class CreateCarDto {
  readonly brand: string;
  readonly model: string;
}
