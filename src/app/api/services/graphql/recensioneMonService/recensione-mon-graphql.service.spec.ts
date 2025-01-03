import { TestBed } from '@angular/core/testing';

import { RecensioniService } from './recensione-mon-graphql.service';

describe('RecensioneMonGraphqlService', () => {
  let service: RecensioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecensioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
