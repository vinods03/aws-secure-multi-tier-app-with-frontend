import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondPriceFormComponent } from './diamond-price-form.component';

describe('DiamondPriceFormComponent', () => {
  let component: DiamondPriceFormComponent;
  let fixture: ComponentFixture<DiamondPriceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondPriceFormComponent]
    });
    fixture = TestBed.createComponent(DiamondPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
