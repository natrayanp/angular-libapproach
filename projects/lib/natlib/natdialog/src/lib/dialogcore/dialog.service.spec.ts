import { TestBed } from '@angular/core/testing';

import { NatdialogService } from './dialog.service';

describe('NatdialogService', () => {
  let service: NatdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
