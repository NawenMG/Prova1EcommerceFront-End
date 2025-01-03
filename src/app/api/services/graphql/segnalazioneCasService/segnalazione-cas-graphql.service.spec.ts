import { TestBed } from '@angular/core/testing';

import { SegnalazioniService } from './segnalazione-cas-graphql.service';

describe('SegnalazioneCasService', () => {
  let service: SegnalazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegnalazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
