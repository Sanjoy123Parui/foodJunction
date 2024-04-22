import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersContactsComponent } from './customers-contacts.component';

describe('CustomersContactsComponent', () => {
  let component: CustomersContactsComponent;
  let fixture: ComponentFixture<CustomersContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
