import { TestBed } from '@angular/core/testing';

import { FbFacadeService } from './fb-facade.service';

describe('FbFacadeService', () => {
  let service: FbFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
