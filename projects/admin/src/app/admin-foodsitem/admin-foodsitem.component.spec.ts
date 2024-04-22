import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodsitemComponent } from './admin-foodsitem.component';

describe('AdminFoodsitemComponent', () => {
  let component: AdminFoodsitemComponent;
  let fixture: ComponentFixture<AdminFoodsitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFoodsitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFoodsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
