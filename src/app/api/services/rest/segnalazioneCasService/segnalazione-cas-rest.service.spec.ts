import { TestBed } from '@angular/core/testing';

import { SegnalazioniService } from './segnalazione-cas-rest.service';

describe('SegnalazioneCasRestService', () => {
  let service: SegnalazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegnalazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
