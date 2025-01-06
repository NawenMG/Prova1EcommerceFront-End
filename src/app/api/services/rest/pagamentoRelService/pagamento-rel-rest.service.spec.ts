import { TestBed } from '@angular/core/testing';

import { PagamentiRestService } from './pagamento-rel-rest.service';

describe('PagamentoRelRestService', () => {
  let service: PagamentiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
