import { TestBed } from '@angular/core/testing';

import { OrdiniGraphqlService } from './ordine-rel-graphql.service';

describe('OrdineRelGraphqlService', () => {
  let service: OrdiniGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdiniGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
