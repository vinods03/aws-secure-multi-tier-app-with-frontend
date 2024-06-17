import { TestBed } from '@angular/core/testing';

import { CarPriceServiceService } from './car-price-service.service';

describe('CarPriceServiceService', () => {
  let service: CarPriceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarPriceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
