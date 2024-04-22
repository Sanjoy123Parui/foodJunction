import { TestBed } from '@angular/core/testing';

import { AdminFooditemsApiService } from './admin-fooditems-api.service';

describe('AdminFooditemsApiService', () => {
  let service: AdminFooditemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFooditemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
