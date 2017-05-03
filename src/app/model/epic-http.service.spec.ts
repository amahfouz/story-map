import { TestBed, inject } from '@angular/core/testing';

import { EpicHttpService } from './epic-http.service';

describe('EpicHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpicHttpService]
    });
  });

  it('should ...', inject([EpicHttpService], (service: EpicHttpService) => {
    expect(service).toBeTruthy();
  }));
});
