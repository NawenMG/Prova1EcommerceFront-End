import { TestBed } from '@angular/core/testing';

import { ResiGraphqlService } from './reso-rel-graphql.service';

describe('ResoRelGraphqlService', () => {
  let service: ResiGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResiGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
