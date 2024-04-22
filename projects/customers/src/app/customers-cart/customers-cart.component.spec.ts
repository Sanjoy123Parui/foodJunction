import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCartComponent } from './customers-cart.component';

describe('CustomersCartComponent', () => {
  let component: CustomersCartComponent;
  let fixture: ComponentFixture<CustomersCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
