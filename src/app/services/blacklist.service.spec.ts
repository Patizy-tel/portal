/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlacklistService } from './blacklist.service';

describe('Service: Blacklist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlacklistService]
    });
  });

  it('should ...', inject([BlacklistService], (service: BlacklistService) => {
    expect(service).toBeTruthy();
  }));
});
