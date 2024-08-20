import { TestBed } from '@angular/core/testing';

import { GroceryShopService } from '../../shopkeeper/shopkeeper.service';

describe('GroceryShopService', () => {
  let service: GroceryShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
