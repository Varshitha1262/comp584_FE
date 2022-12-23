import { TestBed } from '@angular/core/testing';

import { ViewDoctorsService } from './view-doctors.service';

describe('ViewDoctorsService', () => {
  let service: ViewDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
