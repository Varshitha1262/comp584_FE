import { TestBed } from '@angular/core/testing';

import { ViewPatientsService } from './view-patients.service';

describe('ViewPatientsService', () => {
  let service: ViewPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
