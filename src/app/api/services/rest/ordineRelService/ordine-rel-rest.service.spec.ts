import { TestBed } from '@angular/core/testing';

import { OrdiniRestService } from './ordine-rel-rest.service';

describe('OrdineRelRestService', () => {
  let service: OrdiniRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdiniRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
