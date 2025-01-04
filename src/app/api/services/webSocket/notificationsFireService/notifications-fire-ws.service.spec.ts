import { TestBed } from '@angular/core/testing';

import { NotificationsWebSocketService } from './notifications-fire-ws.service';

describe('NotificationsFireWSService', () => {
  let service: NotificationsWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
