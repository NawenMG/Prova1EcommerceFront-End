import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionProductComponent } from './introduction-product.component';

describe('IntroductionProductComponent', () => {
  let component: IntroductionProductComponent;
  let fixture: ComponentFixture<IntroductionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
