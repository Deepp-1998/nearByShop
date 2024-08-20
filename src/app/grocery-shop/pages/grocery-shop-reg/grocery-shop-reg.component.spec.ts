import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryShopRegComponent } from './grocery-shop-reg.component';

describe('GroceryShopRegComponent', () => {
  let component: GroceryShopRegComponent;
  let fixture: ComponentFixture<GroceryShopRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryShopRegComponent]
    });
    fixture = TestBed.createComponent(GroceryShopRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
