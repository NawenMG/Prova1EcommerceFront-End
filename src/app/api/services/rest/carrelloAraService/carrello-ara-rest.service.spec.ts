import { TestBed } from '@angular/core/testing';

import { CarrelloService } from './carrello-ara-rest.service';

describe('CarrelloAraRestService', () => {
  let service: CarrelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
