import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetdialogComponent } from './targetdialog.component';

describe('TargetdialogComponent', () => {
  let component: TargetdialogComponent;
  let fixture: ComponentFixture<TargetdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
