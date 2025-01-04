import { TestBed } from '@angular/core/testing';

import { GraphDBService } from './graph-neo-rest.service';

describe('GraphNeoRestService', () => {
  let service: GraphDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
