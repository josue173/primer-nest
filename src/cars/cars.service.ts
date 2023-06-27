import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(), // generar un UUID
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  public findAll() {
    return this.cars;
  }
  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`Car whit id '${id}' not found`);
    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  public updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car is not valid`);
    this.cars = this.cars.map((car) => {
      if ((car.id = id)) {
        carDB = {
          ...carDB, // Enviar información de la DB
          ...updateCarDto, // Enviar información actualizada, esto sobre escribe la información de arriba
          id, // Sobree escribe el ID de la variable anterior en caso de que envíen uno
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  public delete(id: string) {
    this.findOneById(id);
    this.cars.filter((car) => car.id !== id);
    return {
      ok: true,
    };
  }
}
