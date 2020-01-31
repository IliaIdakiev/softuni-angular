import { TestBed } from '@angular/core/testing';

import { CausesService } from './causes.service';

describe('CausesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CausesService = TestBed.get(CausesService);
    expect(service).toBeTruthy();
  });
});
