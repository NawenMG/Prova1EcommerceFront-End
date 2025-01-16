import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenditaProdottiComponent } from './vendita-prodotti.component';

describe('VenditaProdottiComponent', () => {
  let component: VenditaProdottiComponent;
  let fixture: ComponentFixture<VenditaProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenditaProdottiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenditaProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
