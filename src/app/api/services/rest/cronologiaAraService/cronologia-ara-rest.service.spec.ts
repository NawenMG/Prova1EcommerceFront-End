import { TestBed } from '@angular/core/testing';

import { CronologiaService } from './cronologia-ara-rest.service';

describe('CronologiaAraRestService', () => {
  let service: CronologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
