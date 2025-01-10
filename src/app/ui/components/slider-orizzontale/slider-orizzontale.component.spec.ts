import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOrizzontaleComponent } from './slider-orizzontale.component';

describe('SliderOrizzontaleComponent', () => {
  let component: SliderOrizzontaleComponent;
  let fixture: ComponentFixture<SliderOrizzontaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderOrizzontaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderOrizzontaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
