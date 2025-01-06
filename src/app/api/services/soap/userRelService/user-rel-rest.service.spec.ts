import { TestBed } from '@angular/core/testing';

import { UserSoapService } from './user-rel-rest.service';

describe('UserRelRestService', () => {
  let service: UserSoapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSoapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
