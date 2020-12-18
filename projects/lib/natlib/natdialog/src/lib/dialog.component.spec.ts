import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatdialogComponent } from './dialog.component';

describe('NatdialogComponent', () => {
  let component: NatdialogComponent;
  let fixture: ComponentFixture<NatdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
