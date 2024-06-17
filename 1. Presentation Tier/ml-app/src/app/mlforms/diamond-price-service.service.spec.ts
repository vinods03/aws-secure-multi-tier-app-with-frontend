import { TestBed } from '@angular/core/testing';

import { DiamondPriceServiceService } from './diamond-price-service.service';

describe('DiamondPriceServiceService', () => {
  let service: DiamondPriceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiamondPriceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
