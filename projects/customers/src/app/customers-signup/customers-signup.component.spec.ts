import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSignupComponent } from './customers-signup.component';

describe('CustomersSignupComponent', () => {
  let component: CustomersSignupComponent;
  let fixture: ComponentFixture<CustomersSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
