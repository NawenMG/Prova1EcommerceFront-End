import { TestBed } from '@angular/core/testing';

import { ServerResponseService } from './server-response-tsgraphql.service';

describe('ServerResponseTSGraphqlService', () => {
  let service: ServerResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
