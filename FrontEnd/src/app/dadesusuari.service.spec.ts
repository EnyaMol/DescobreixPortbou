import { TestBed } from '@angular/core/testing';

import { DadesusuariService } from './dadesusuari.service';

describe('DadesusuariService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadesusuariService = TestBed.get(DadesusuariService);
    expect(service).toBeTruthy();
  });
});
