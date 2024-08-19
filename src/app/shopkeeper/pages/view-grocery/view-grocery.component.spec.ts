import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroceryComponent } from './view-grocery.component';

describe('ViewGroceryComponent', () => {
  let component: ViewGroceryComponent;
  let fixture: ComponentFixture<ViewGroceryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewGroceryComponent]
    });
    fixture = TestBed.createComponent(ViewGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
