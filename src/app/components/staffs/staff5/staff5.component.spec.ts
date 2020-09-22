import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff5Component } from './staff5.component';

describe('Staff5Component', () => {
  let component: Staff5Component;
  let fixture: ComponentFixture<Staff5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staff5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
