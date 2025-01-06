import { TestBed } from '@angular/core/testing';

import { CategorieRestService } from './categoria-rel-rest.service';

describe('CategoriaRelRestService', () => {
  let service: CategorieRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
