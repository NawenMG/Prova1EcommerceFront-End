import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransizioniUiComponent } from './transizioni-ui.component';

describe('TransizioniUiComponent', () => {
  let component: TransizioniUiComponent;
  let fixture: ComponentFixture<TransizioniUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransizioniUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransizioniUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
