import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersFooditemsComponent } from './customers-fooditems.component';

describe('CustomersFooditemsComponent', () => {
  let component: CustomersFooditemsComponent;
  let fixture: ComponentFixture<CustomersFooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersFooditemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersFooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
