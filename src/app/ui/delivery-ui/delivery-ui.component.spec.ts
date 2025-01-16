import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryUiComponent } from './delivery-ui.component';

describe('DeliveryUiComponent', () => {
  let component: DeliveryUiComponent;
  let fixture: ComponentFixture<DeliveryUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
