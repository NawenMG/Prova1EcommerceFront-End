import { TestBed } from '@angular/core/testing';

import { CategorieGraphqlService } from './categoria-rel-graphql.service';

describe('CategoriaRelGraphqlService', () => {
  let service: CategorieGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
