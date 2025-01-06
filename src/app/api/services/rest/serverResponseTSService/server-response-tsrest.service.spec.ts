import { TestBed } from '@angular/core/testing';

import { ServerResponseService } from './server-response-tsrest.service';

describe('ServerResponseTSRestService', () => {
  let service: ServerResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
