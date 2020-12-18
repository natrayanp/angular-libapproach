import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydialogComponent } from './displaydialog.component';

describe('DisplaydialogComponent', () => {
  let component: DisplaydialogComponent;
  let fixture: ComponentFixture<DisplaydialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
