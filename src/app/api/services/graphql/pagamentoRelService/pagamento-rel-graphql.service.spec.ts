import { TestBed } from '@angular/core/testing';

import { PagamentiGraphqlService } from './pagamento-rel-graphql.service';

describe('PagamentoRelGraphqlService', () => {
  let service: PagamentiGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentiGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
