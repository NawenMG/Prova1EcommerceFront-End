import { TestBed } from '@angular/core/testing';

import { SchedeProdottiService } from './scheda-prodotto-mon-graphql.service';

describe('SchedaProdottoMonGraphqlService', () => {
  let service: SchedeProdottiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedeProdottiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
