import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlleruiComponent } from './controllerui.component';

describe('ControlleruiComponent', () => {
  let component: ControlleruiComponent;
  let fixture: ComponentFixture<ControlleruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlleruiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlleruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
