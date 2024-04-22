import { TestBed } from '@angular/core/testing';

import { FoodsitemsApiService } from './foodsitems-api.service';

describe('FoodsitemsApiService', () => {
  let service: FoodsitemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsitemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
