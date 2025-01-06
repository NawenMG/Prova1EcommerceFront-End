import { TestBed } from '@angular/core/testing';

import { ResiRestService } from './reso-rel-rest.service';

describe('ResoRelRestService', () => {
  let service: ResiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
