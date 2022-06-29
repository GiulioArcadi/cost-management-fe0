import { TestBed } from '@angular/core/testing';

import { DipendenteCommessaService } from './dipendente-commessa.service';

describe('DipendenteCommessaService', () => {
  let service: DipendenteCommessaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipendenteCommessaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
