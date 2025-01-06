import { TestBed } from '@angular/core/testing';

import { ProdottiGraphqlService } from './prodotto-rel-graphql.service';

describe('ProdottoRelGraphqlService', () => {
  let service: ProdottiGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
