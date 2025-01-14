import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeRisposteComponent } from './domande-risposte.component';

describe('DomandeRisposteComponent', () => {
  let component: DomandeRisposteComponent;
  let fixture: ComponentFixture<DomandeRisposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomandeRisposteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomandeRisposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
