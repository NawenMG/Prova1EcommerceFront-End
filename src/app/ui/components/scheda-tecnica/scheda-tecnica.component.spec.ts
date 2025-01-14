import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaTecnicaComponent } from './scheda-tecnica.component';

describe('SchedaTecnicaComponent', () => {
  let component: SchedaTecnicaComponent;
  let fixture: ComponentFixture<SchedaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedaTecnicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
