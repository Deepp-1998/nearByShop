import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperRegComponent } from './shopkeeper-reg.component';

describe('ShopkeeperRegComponent', () => {
  let component: ShopkeeperRegComponent;
  let fixture: ComponentFixture<ShopkeeperRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopkeeperRegComponent]
    });
    fixture = TestBed.createComponent(ShopkeeperRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
