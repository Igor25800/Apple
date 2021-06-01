import { TestBed } from '@angular/core/testing';

import { NavsService } from './navs.service';

describe('NavsService', () => {
  let service: NavsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
