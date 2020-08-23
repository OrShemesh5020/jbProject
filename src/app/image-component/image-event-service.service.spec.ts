import { TestBed } from '@angular/core/testing';

import { ImageEventServiceService } from './image-event-service.service';

describe('ImageEventServiceService', () => {
  let service: ImageEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
