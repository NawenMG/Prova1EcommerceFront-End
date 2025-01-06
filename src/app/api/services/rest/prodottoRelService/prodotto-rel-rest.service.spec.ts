import { TestBed } from '@angular/core/testing';

import { ProdottiRestService } from './prodotto-rel-rest.service';

describe('ProdottoRelRestService', () => {
  let service: ProdottiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
