import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff4Component } from './staff4.component';

describe('Staff4Component', () => {
  let component: Staff4Component;
  let fixture: ComponentFixture<Staff4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staff4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
