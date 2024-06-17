import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriceFormComponent } from './car-price-form.component';

describe('CarPriceFormComponent', () => {
  let component: CarPriceFormComponent;
  let fixture: ComponentFixture<CarPriceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPriceFormComponent]
    });
    fixture = TestBed.createComponent(CarPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
