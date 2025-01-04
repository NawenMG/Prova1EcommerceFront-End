import { TestBed } from '@angular/core/testing';

import { SettingSiteService } from './setting-site-ara-rest.service';

describe('SettingSiteAraRestService', () => {
  let service: SettingSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
