import { TestBed } from '@angular/core/testing';

import { RecensioniService } from './recesione-mon-rest.service';

describe('RecesioneMonRestService', () => {
  let service: RecensioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecensioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
