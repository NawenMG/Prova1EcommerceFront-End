import { TestBed } from '@angular/core/testing';

import { OrdiniService } from './order-cas-rest.service';

describe('OrderCasRestService', () => {
  let service: OrdiniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdiniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
