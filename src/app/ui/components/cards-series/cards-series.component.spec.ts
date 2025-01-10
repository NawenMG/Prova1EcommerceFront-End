import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSeriesComponent } from './cards-series.component';

describe('CardsSeriesComponent', () => {
  let component: CardsSeriesComponent;
  let fixture: ComponentFixture<CardsSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
