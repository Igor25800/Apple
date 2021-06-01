import { TestBed } from '@angular/core/testing';

import { DetaliService } from './detali.service';

describe('DetaliService', () => {
  let service: DetaliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
