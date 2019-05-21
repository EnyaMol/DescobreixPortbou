import { TestBed } from '@angular/core/testing';

import { ApirutesService } from './apirutes.service';

describe('ApirutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApirutesService = TestBed.get(ApirutesService);
    expect(service).toBeTruthy();
  });
});
