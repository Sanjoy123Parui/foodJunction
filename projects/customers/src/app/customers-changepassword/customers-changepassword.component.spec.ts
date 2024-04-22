import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersChangepasswordComponent } from './customers-changepassword.component';

describe('CustomersChangepasswordComponent', () => {
  let component: CustomersChangepasswordComponent;
  let fixture: ComponentFixture<CustomersChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
