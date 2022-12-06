import { TestBed } from '@angular/core/testing';

import { QhaliService } from './qhali.service';

describe('QhaliService', () => {
  let service: QhaliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QhaliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
