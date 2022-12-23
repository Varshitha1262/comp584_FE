import { TestBed } from '@angular/core/testing';

import { ViewDoctorDetailService } from './view-doctor-detail.service';

describe('ViewDoctorDetailService', () => {
  let service: ViewDoctorDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDoctorDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
