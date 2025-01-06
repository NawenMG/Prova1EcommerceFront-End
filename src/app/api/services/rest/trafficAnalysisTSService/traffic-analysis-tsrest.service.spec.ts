import { TestBed } from '@angular/core/testing';

import { TrafficAnalysisService } from './traffic-analysis-tsrest.service';

describe('TrafficAnalysisTSRestService', () => {
  let service: TrafficAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
