import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitOneShopComponent } from './visit-one-shop.component';

describe('VisitOneShopComponent', () => {
  let component: VisitOneShopComponent;
  let fixture: ComponentFixture<VisitOneShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitOneShopComponent]
    });
    fixture = TestBed.createComponent(VisitOneShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
