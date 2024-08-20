import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryShopComponent } from './grocery-shop.component';

describe('GroceryShopComponent', () => {
  let component: GroceryShopComponent;
  let fixture: ComponentFixture<GroceryShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryShopComponent]
    });
    fixture = TestBed.createComponent(GroceryShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
