import { TestBed } from '@angular/core/testing';

import { RecentTacoServiceService } from './recent-taco-service.service';

describe('RecentTacoServiceService', () => {
  let service: RecentTacoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentTacoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
