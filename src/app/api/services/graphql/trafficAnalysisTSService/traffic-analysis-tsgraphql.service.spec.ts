import { TestBed } from '@angular/core/testing';

import { TrafficAnalysisService } from './traffic-analysis-tsgraphql.service';

describe('TrafficAnalysisTSGraphqlService', () => {
  let service: TrafficAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
