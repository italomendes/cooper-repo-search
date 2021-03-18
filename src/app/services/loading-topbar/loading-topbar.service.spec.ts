import { TestBed } from '@angular/core/testing';

import { LoadingTopbarService } from './loading-topbar.service';

describe('LoadingTopbarService', () => {
  let service: LoadingTopbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingTopbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
