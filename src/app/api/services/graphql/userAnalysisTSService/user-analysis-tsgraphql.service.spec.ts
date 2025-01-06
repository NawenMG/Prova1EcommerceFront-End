import { TestBed } from '@angular/core/testing';

import { UserAnalysisService } from './user-analysis-tsgraphql.service';

describe('UserAnalysisTSGraphqlService', () => {
  let service: UserAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
