import { TestBed, inject } from '@angular/core/testing';

import { EpicService } from './epic.service';

describe('EpicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpicService]
    });
  });

  it('should ...', inject([EpicService], (service: EpicService) => {
    expect(service).toBeTruthy();
  }));
});
