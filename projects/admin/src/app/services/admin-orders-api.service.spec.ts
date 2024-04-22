import { TestBed } from '@angular/core/testing';

import { AdminOrdersApiService } from './admin-orders-api.service';

describe('AdminOrdersApiService', () => {
  let service: AdminOrdersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOrdersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
