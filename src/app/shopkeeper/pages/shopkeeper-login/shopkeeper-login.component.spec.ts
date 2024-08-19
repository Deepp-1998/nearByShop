import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperLoginComponent } from './shopkeeper-login.component';

describe('ShopkeeperLoginComponent', () => {
  let component: ShopkeeperLoginComponent;
  let fixture: ComponentFixture<ShopkeeperLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopkeeperLoginComponent]
    });
    fixture = TestBed.createComponent(ShopkeeperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
