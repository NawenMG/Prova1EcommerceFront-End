import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSeriesComponent } from './dropdown-series.component';

describe('DropdownSeriesComponent', () => {
  let component: DropdownSeriesComponent;
  let fixture: ComponentFixture<DropdownSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
