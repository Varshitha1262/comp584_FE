import { TestBed } from '@angular/core/testing';

import { ViewPatientDetailService } from './view-patient-detail.service';

describe('ViewPatientDetailService', () => {
  let service: ViewPatientDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPatientDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
