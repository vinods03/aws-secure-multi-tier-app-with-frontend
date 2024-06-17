import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondPriceListComponent } from './diamond-price-list.component';

describe('DiamondPriceListComponent', () => {
  let component: DiamondPriceListComponent;
  let fixture: ComponentFixture<DiamondPriceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondPriceListComponent]
    });
    fixture = TestBed.createComponent(DiamondPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
