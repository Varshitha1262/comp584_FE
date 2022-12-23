import { TestBed } from '@angular/core/testing';

import { ViewAllAppointmentService } from './view-all-appointment.service';

describe('ViewAllAppointmentService', () => {
  let service: ViewAllAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
