import { TestBed, inject } from '@angular/core/testing';

import { CreateDecisionService } from './create-decision.service';

describe('CreateDecisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateDecisionService]
    });
  });

  it('should ...', inject([CreateDecisionService], (service: CreateDecisionService) => {
    expect(service).toBeTruthy();
  }));
});
