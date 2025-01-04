import { TestBed } from '@angular/core/testing';

import { ShippingStatusWebSocketService } from './shipping-status-fire-ws.service';

describe('ShippingStatusFireWSService', () => {
  let service: ShippingStatusWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingStatusWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
