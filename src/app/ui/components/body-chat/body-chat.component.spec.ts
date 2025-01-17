import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChatComponent } from './body-chat.component';

describe('BodyChatComponent', () => {
  let component: BodyChatComponent;
  let fixture: ComponentFixture<BodyChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
