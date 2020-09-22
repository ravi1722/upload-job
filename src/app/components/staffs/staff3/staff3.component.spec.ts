import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff3Component } from './staff3.component';

describe('Staff3Component', () => {
  let component: Staff3Component;
  let fixture: ComponentFixture<Staff3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staff3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
