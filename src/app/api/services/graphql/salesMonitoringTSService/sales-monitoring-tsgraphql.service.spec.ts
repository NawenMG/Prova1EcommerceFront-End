import { TestBed } from '@angular/core/testing';

import { SalesMonitoringService } from './sales-monitoring-tsgraphql.service';

describe('SalesMonitoringTSGraphqlService', () => {
  let service: SalesMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
