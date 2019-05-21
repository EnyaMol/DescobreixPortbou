import { TestBed } from '@angular/core/testing';

import { ApipuntsService } from './apipunts.service';

describe('ApipuntsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApipuntsService = TestBed.get(ApipuntsService);
    expect(service).toBeTruthy();
  });
});
