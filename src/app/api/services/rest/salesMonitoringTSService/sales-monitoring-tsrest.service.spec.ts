import { TestBed } from '@angular/core/testing';

import { SalesMonitoringService } from './sales-monitoring-tsrest.service';

describe('SalesMonitoringTSRestService', () => {
  let service: SalesMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
