import { TestBed } from '@angular/core/testing';

import { UserBService } from './user-b.service';

describe('UserBService', () => {
  let service: UserBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
