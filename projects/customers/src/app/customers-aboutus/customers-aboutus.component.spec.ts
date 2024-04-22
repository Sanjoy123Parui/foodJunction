import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAboutusComponent } from './customers-aboutus.component';

describe('CustomersAboutusComponent', () => {
  let component: CustomersAboutusComponent;
  let fixture: ComponentFixture<CustomersAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
