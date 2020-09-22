import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFileViewComponent } from './staff-file-view.component';

describe('StaffFileViewComponent', () => {
  let component: StaffFileViewComponent;
  let fixture: ComponentFixture<StaffFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
