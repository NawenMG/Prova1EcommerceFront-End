import { TestBed } from '@angular/core/testing';

import { TransizioniService } from './transizione-cas-rest.service';

describe('TransizioneCasRestService', () => {
  let service: TransizioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransizioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
