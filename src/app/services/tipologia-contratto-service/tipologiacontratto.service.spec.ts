import { TestBed } from '@angular/core/testing';

import { TipologiacontrattoService } from './tipologiacontratto.service';

describe('TipologiacontrattoService', () => {
  let service: TipologiacontrattoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipologiacontrattoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
