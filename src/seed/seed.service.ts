import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly _carsService: CarsService,
    private readonly _brandsService: BrandsService,
  ) {}
  populateDB() {
    this._carsService.fillCarsWithSeedData(CARS_SEED);
    this._brandsService.fillBransWithSeedData(BRANDS_SEED);
    return 'SEED';
  }
}
