import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryShopLoginComponent } from './grocery-shop-login.component';

describe('GroceryShopLoginComponent', () => {
  let component: GroceryShopLoginComponent;
  let fixture: ComponentFixture<GroceryShopLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryShopLoginComponent]
    });
    fixture = TestBed.createComponent(GroceryShopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
