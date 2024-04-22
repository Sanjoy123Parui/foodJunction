import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangepasswordComponent } from './admin-changepassword.component';

describe('AdminChangepasswordComponent', () => {
  let component: AdminChangepasswordComponent;
  let fixture: ComponentFixture<AdminChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
