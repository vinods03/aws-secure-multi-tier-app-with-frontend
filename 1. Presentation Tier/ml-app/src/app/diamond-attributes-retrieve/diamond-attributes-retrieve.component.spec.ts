import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondAttributesRetrieveComponent } from './diamond-attributes-retrieve.component';

describe('DiamondAttributesRetrieveComponent', () => {
  let component: DiamondAttributesRetrieveComponent;
  let fixture: ComponentFixture<DiamondAttributesRetrieveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondAttributesRetrieveComponent]
    });
    fixture = TestBed.createComponent(DiamondAttributesRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
